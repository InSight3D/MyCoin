from lib2to3.pgen2 import token
import time
from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from pycoingecko import CoinGeckoAPI
from flask_cors import CORS

app = Flask(__name__)
app.config['MYSQL_HOST'] = 'sql5.freemysqlhosting.net'
app.config['MYSQL_USER'] = 'sql5488931'
app.config['MYSQL_PASSWORD'] = '5YUVQYnWlq'
app.config['MYSQL_DB'] = 'sql5488931'

mysql = MySQL(app)
cg = CoinGeckoAPI()
CORS(app)

@app.route('/test', methods=['GET', 'POST'])
def test():
    if request.method == 'POST':
        data = request.form['name']
        print(data)
        return jsonify(data)
    else:
        return jsonify({'message': 'Hello World!'})

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/register', methods=['POST', 'GET'])
def register():
    if request.method == 'POST':
        cur = mysql.connection.cursor()

        email = request.form['email']
        password = request.form['password']
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        account_value = 100000

        cur.execute("INSERT INTO users (email, password, first_name, last_name, account_value) VALUES (%s, %s, %s, %s, %s)", (email, password, first_name, last_name, account_value))

        mysql.connection.commit()
        cur.close()
        return jsonify({'message': 'User created successfully'})
    else:
        return jsonify({'message': 'Please use POST method'})

@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        cur = mysql.connection.cursor()

        email = request.form['email']
        password = request.form['password']

        cur.execute("SELECT * FROM users WHERE email = %s AND password = %s", (email, password))
        user = cur.fetchone()
        if user:
            return jsonify({'message': 'User logged in successfully'})
        else:
            return jsonify({'message': 'User not found'})
    else:
        return jsonify({'message': 'Please use POST method'})

@app.route('/buytoken', methods=['POST', 'GET'])
def buy():
    if request.method == 'POST':
        cur = mysql.connection.cursor()

        token = request.form['token']
        ammount = request.form['ammount']
        email = request.form['email']

        # get the usd ammount of the user
        cur.execute("SELECT * FROM users WHERE email = %s", (email,))
        user = cur.fetchone()
        if user:
            account_value = user['account_value']
            # get the price of the token
            price = cg.get_price(ids=token, vs_currencies='usd')
            token_price = price['usd']

            # calculate the transaction value
            transaction_value = token_price * ammount

            # check if the user has enough money
            if account_value >= transaction_value:
                # check if the token is already in the database
                cur.execute("SELECT * FROM tokens WHERE token = %s", (token,))
                token_in_db = cur.fetchone()
                if token_in_db:
                    # updaate the user account value
                    account_value = account_value - transaction_value
                    cur.execute("UPDATE users SET account_value = %s WHERE email = %s", (account_value, email))
                    # update the token ammount
                    ammount = ammount + token_in_db['ammount']
                    cur.execute("UPDATE tokens SET ammount = %s WHERE token = %s", (ammount, token))
                    mysql.connection.commit()
                    cur.close()
                    return jsonify({'message': 'Transaction successful'})
                else:
                    # update the user account value
                    account_value = account_value - transaction_value
                    cur.execute("UPDATE users SET account_value = %s WHERE email = %s", (account_value, email))
                    # insert data into crypto table
                    cur.execute("INSERT INTO crypto (email, token, token_ammount, transaction_price	) VALUES (%s, %s, %s, %s)", (email, token, ammount, transaction_value))
                    mysql.connection.commit()
                    cur.close()
                    return jsonify({'message': 'Transaction successful'})
            else:
                return jsonify({'message': 'Not enough money'})
        else:
            return jsonify({'message': 'User not found'})


@app.route('/selltoken', methods=['POST', 'GET'])
def sell():
    if request.method == 'POST':
        cur = mysql.connection.cursor()

        token = request.form['token']
        ammount = request.form['ammount']
        email = request.form['email']

        # get all user holdings from crypto table
        cur.execute("SELECT * FROM crypto WHERE email = %s", (email,))
        user = cur.fetchall()
        if user:
            for row in user:
                if row['token'] == token:
                    # get the price of the token
                    price = cg.get_price(ids=token, vs_currencies='usd')
                    token_price = price['usd']
                    # calculate the transaction value
                    transaction_value = token_price * ammount
                    # update the user account value
                    account_value = user['account_value'] + transaction_value
                    cur.execute("UPDATE users SET account_value = %s WHERE email = %s", (account_value, email))
                    # delete the user holding
                    cur.execute("DELETE FROM crypto WHERE email = %s AND token = %s", (email, token))
                    mysql.connection.commit()
                    cur.close()
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
        cur = mysql.connection.cursor()

        email = request.form['email']

        # get all user holdings from crypto table
        cur.execute("SELECT * FROM crypto WHERE email = %s", (email,))
        user = cur.fetchall()
        if user:
            return jsonify({'tokens': user})
        else:
            return jsonify({'message': 'User not found'})
    else:
        return jsonify({'message': 'Please use POST method'})

# Return USD value of all the tokens in json format for the user
@app.route('/usdvalue', methods=['POST', 'GET'])
def usdvalue():
    if request.method == 'POST':
        cur = mysql.connection.cursor()

        email = request.form['email']

        # get all user holdings from crypto table
        cur.execute("SELECT * FROM crypto WHERE email = %s", (email,))
        
        user = cur.fetchall()

        usd_account_value = 0

        if user:
            for row in user:
                # get the price of the token
                price = cg.get_price(ids=row['token'], vs_currencies='usd')
                token_price = price['usd']
                # calculate the transaction value
                transaction_value = token_price * row['token_ammount']
                usd_account_value = usd_account_value + transaction_value

                mysql.connection.commit()
                cur.close()

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
        
# test