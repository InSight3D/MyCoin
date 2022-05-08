import time
from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from pycoingecko import CoinGeckoAPI
from flask_cors import CORS
import os 

from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
app.secret_key = "secret"
app.config['MYSQL_HOST'] = os.environ['MYSQL_HOST']
app.config['MYSQL_USER'] = os.environ['MYSQL_USER']
app.config['MYSQL_PASSWORD'] = os.environ['MYSQL_PASSWORD']
app.config['MYSQL_DB'] = os.environ['MYSQL_DB']
app.config['MYSQL_PORT'] = 3306
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
app.config['CORS_HEADERS'] = 'Content-Type'


mysql = MySQL(app)
cg = CoinGeckoAPI()
from helpers import *
mycoin_helper = MyCoinHelper(cg)
CORS(app, support_credentials=True)

@app.route('/test', methods=['GET', 'POST'])
def test():
    if request.method == 'POST':
        data = request.form['name']
        print(data)
        return jsonify(data)
    else:
        return jsonify({'message': 'Hello World!'})

@app.route('/mysql_test', methods=['GET', 'POST'])
def mysql_test():
    cur = mysql.connection.cursor()
    cur.close()
    return jsonify({'message': 'Works!'})

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/register', methods=['POST', 'GET'])
def register():
    table = Table('users', "email", "password", "first_name", "last_name", "account_value")
    if request.method == 'POST':
        

        email = request.form['email']
        password = request.form['password']
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        account_value = 10000

        if isnewuser(email):
            table.insert(email, password, first_name, last_name, account_value)
            return jsonify({'message': 'User created successfully'})
        else:
            return jsonify({'message': 'User already exists'})
    else:
        return jsonify({'message': 'Please use POST method'})

@app.route('/login', methods=['POST', 'GET'])
@cross_origin()
def login():
    users = Table('users', "email", "password", "first_name", "last_name", "account_value")
    if request.method == 'POST':
        

        email = request.form['email']
        password = request.form['password']

        user = users.getone('email', email)
        accPass = user.get('password')

        if accPass is None:
            return jsonify({'message': 'User does not exist'})
        else:
            if accPass == password:
                return jsonify({'message': 'Login successful'})
            else:
                return jsonify({'message': 'Incorrect password'})
    else:
        return jsonify({'message': 'Please use POST method'})

@app.route('/buytoken', methods=['POST', 'GET'])
def buy():
    if request.method == 'POST':

        token = request.form['token']
        ammount = request.form['ammount']
        email = request.form['email']

        # get the usd ammount of the user
        users = Table('users', "email", "password", "first_name", "last_name", "account_value")
        user = users.getone('email', email)
        accValue = user.get('account_value')
        if user:
            account_value = accValue
            # get the price of the token
            price = cg.get_price(ids=token, vs_currencies='usd')
            token_price = price['usd']

            # calculate the transaction value
            transaction_value = token_price * ammount

            # check if the user has enough money
            if account_value >= transaction_value:
                # check if the token is already in the database
                tokens = Table('cryptos', "email", "token", "token_ammount", "transaction_price")
                token_in_db = tokens.getone('token', token)
                if token_in_db:
                    # updaate the user account value
                    account_value = account_value - transaction_value
                    users.update('account_value', account_value, 'email', email)
                    # update the token ammount
                    ammount = ammount + token_in_db['ammount']
                    tokens.update('ammount', ammount, 'token', token)
                    # return transaction success
                    return jsonify({'message': 'Transaction successful'})
                else:
                    # update the user account value
                    account_value = account_value - transaction_value
                    users.update('account_value', account_value, 'email', email)
                    # insert data into crypto table
                    tokens.insert(email, token, ammount, token_price)
                    # return transaction success
                    return jsonify({'message': 'Transaction successful'})
            else:
                return jsonify({'message': 'Not enough money'})
        else:
            return jsonify({'message': 'User not found'})


@app.route('/selltoken', methods=['POST', 'GET'])
def sell():
    if request.method == 'POST':

        token = request.form['token']
        ammount = request.form['ammount']
        email = request.form['email']

        # get all user holdings from crypto table
        users = Table('users', "email", "password", "first_name", "last_name", "account_value")
        tokens = Table('cryptos', "email", "token", "token_ammount", "transaction_price")

        user = users.getone('email', email)
        account_value = user.get('account_value')
        if user:
            for row in user:
                if row['token'] == token:
                    # get the price of the token
                    price = cg.get_price(ids=token, vs_currencies='usd')
                    token_price = price['usd']
                    # calculate the transaction value
                    transaction_value = token_price * ammount
                    # update the user account value
                    account_value = account_value + transaction_value
                    users.update('account_value', account_value, 'email', email)
                    # delete the token from the database where the email is the same as the user
                    tokens.delete('email', email, 'token', token)
                    return jsonify({'message': 'Transaction successful'})
            return jsonify({'message': 'Token not found'})
        else:
            return jsonify({'message': 'User not found'})
    else:
        return jsonify({'message': 'Please use POST method'})

# Return all the tokens in json format for the user
@app.route('/tokens', methods=['POST', 'GET'])
def tokens():
    if request.method == 'POST':

        email = request.form['email']

        # get all user holdings from crypto table
        tokens = Table('cryptos', "email", "token", "token_ammount", "transaction_price")
        user = tokens.getall('email', email)

        tokens_list = []
        for row in user:
            tokens_list.append({'token': row['token'], 'ammount': row['token_ammount']})
            
        if user:
            return jsonify({'tokens': tokens_list})
        else:
            return jsonify({'message': 'User not found'})
    else:
        return jsonify({'message': 'Please use POST method'})

# Return USD value of all the tokens in json format for the user
@app.route('/usdvalue', methods=['POST', 'GET'])
def usdvalue():
    if request.method == 'POST':

        email = request.form['email']

        # get all user holdings from crypto table
        tokens = Table('cryptos', "email", "token", "token_ammount", "transaction_price")
        user = tokens.getall('email', email)

        usd_account_value = 0
        tokens_list = []
        # get all the tokens of the user and append to tokens_list
        for row in user:
            tokens_list.append({'token': row['token'], 'ammount': row['token_ammount']})
        if user:
            # get the value of the tokens in usd and add to usd_account_value
            for row in tokens_list:
                price = cg.get_price(ids=row['token'], vs_currencies='usd')
                usd_account_value = usd_account_value + (row['ammount'] * price['usd'])
                
                return jsonify({'usd_account_value': usd_account_value})
        else:
            return jsonify({'message': 'User not found'})
    else:
        return jsonify({'message': 'Please use POST method'})    

@app.route('/tradingview/widget', methods=['POST', 'GET'])
def tradingview_widget():
    if request.method == 'POST':
        token = request.form['token']
    
        data = {
            "autosize": True,
            "symbol": "COINBASE:{token}".format(token=token),
            "interval": "D",
            "timezone": "Etc/UTC",
            "theme": "dark",
            "style": "1",
            "locale": "en",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": False,
            "hide_legend": True,
            "show_popup_button": True,
            "popup_width": "1000",
            "popup_height": "650",
            "container_id": "tradingview_ce061"
        }
        return jsonify(data)
    else:
        return jsonify({'message': 'Please use POST method'})

# Get Crypto price from ticker and return in json format
@app.route('/token/price', methods=['POST', 'GET'])
def price():
    if request.method == 'POST':
        token = request.form['token']
        price = cg.get_price(ids=token, vs_currencies='usd')
        return jsonify({'price': price})
    else:
        return jsonify({'message': 'Please use POST method'})

# get token description from ticker and return in json format
@app.route('/token/description', methods=['POST', 'GET'])
def description():
    if request.method == 'POST':
        token = request.form['token']

        description = mycoin_helper.get_description(token)
        return jsonify({'description': description})
    else:
        return jsonify({'message': 'Please use POST method'})