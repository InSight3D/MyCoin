from re import I
from flask import Blueprint, request, jsonify
import json, requests

from helpers import *

trading = Blueprint('trading', __name__)

@trading.route('/buytoken', methods=['POST', 'GET'])
def buy():
    content_type = request.headers.get('Content-Type')
    if content_type == 'application/json':
        data = request.get_json()

        token = data['token']
        ammount = data['ammount']
        email = data['email']

        # get the usd ammount of the user
        users = Table('users', "email", "password", "first_name", "last_name", "account_value")
        user = users.getone('email', email)
        accValue = user.get('account_value')
        if user:
            account_value = accValue
            # get the price of the token
            price = cg.get_price(ids=token, vs_currencies='usd')
            print(price)
            token_price = price[token]['usd']

            # calculate the transaction value
            transaction_value = token_price * int(ammount)

            # check if the user has enough money
            if int(account_value) >= int(transaction_value):
                # check if the token is already in the database
                tokens = Table('cryptos', "email", "token", "token_ammount", "transaction_price")
                token_in_db = tokens.getone('token', token)
                if token_in_db:
                    # updaate the user account value
                    account_value = int(account_value) - int(transaction_value)
                    users.update('account_value', account_value, 'email', email)
                    # update the token ammount
                    ammount = int(ammount) + token_in_db['ammount']
                    tokens.update('ammount', ammount, 'token', token)
                    # return transaction success
                    return jsonify({'message': 'Transaction successful'})
                else:
                    # update the user account value
                    account_value = int(account_value) - int(transaction_value)
                    users.update('account_value', account_value, 'email', email)
                    # insert data into crypto table
                    tokens.insert(email, token, ammount, token_price)
                    # return transaction success
                    return jsonify({'message': 'Transaction successful'})
            else:
                return jsonify({'message': 'Not enough money'})
        else:
            return jsonify({'message': 'User not found'})


@trading.route('/selltoken', methods=['POST', 'GET'])
def sell():
    content_type = request.headers.get('Content-Type')
    if content_type == 'application/json':
        data = request.get_json()

        token = data['token']
        ammount = data['ammount']
        email = data['email']

        # get all user holdings from crypto table
        users = Table('users', "email", "password", "first_name", "last_name", "account_value")
        tokens = Table('cryptos', "email", "token", "token_ammount", "transaction_price")

        user = users.getone('email', email)
        account_value = user.get('account_value')
        user_tokens = tokens.getallwhere('email', email)
        
        if user:
            for i in user_tokens:
                print(i)
                if i['token'] == token:
                    # get the price of the token
                    price = cg.get_price(ids=token, vs_currencies='usd')
                    token_price = price[token]['usd']
                    # calculate the transaction value
                    transaction_value = int(token_price) * int(ammount)
                    # update the user account value
                    account_value = int(account_value) + int(transaction_value)
                    users.update('account_value', account_value, 'email', email)
                    # delete the token from the database where the email is the same as the user
                    tokens.deleteonewhere('email', email, 'token', token)
                    return jsonify({'message': 'Transaction successful'})
            return jsonify({'message': 'Token not found'})
        else:
            return jsonify({'message': 'User not found'})
    else:
        return jsonify({'message': 'Please use POST method'})

# Return all the tokens in json format for the user
@trading.route('/tokens', methods=['POST', 'GET'])
def tokens():
    content_type = request.headers.get('Content-Type')
    if content_type == 'application/json':
        data = request.get_json()

        email = data['email']

        # get all user holdings from crypto table
        tokens = Table('cryptos', "email", "token", "token_ammount", "transaction_price")
        user = tokens.getallwhere('email', email)

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
@trading.route('/usdvalue', methods=['POST', 'GET'])
def usdvalue():
    content_type = request.headers.get('Content-Type')
    if content_type == 'application/json':
        data = request.get_json()

        email = data['email']

        # get all user holdings from crypto table
        tokens = Table('cryptos', "email", "token", "token_ammount", "transaction_price")
        user = tokens.getallwhere('email', email)

        usd_account_value = 0
        tokens_list = []
        # get all the tokens of the user and append to tokens_list
        for row in user:
            tokens_list.append({'token': row['token'], 'ammount': row['token_ammount']})
        if user:
            # get the value of the tokens in usd and add to usd_account_value
            for row in tokens_list:
                price = cg.get_price(ids=row['token'], vs_currencies='usd')
                usd_account_value = int(usd_account_value) + (int(row['ammount']) * int(price[row['token']]['usd']))
                
                return jsonify({'usd_account_value': usd_account_value})
        else:
            return jsonify({'message': 'User not found'})
    else:
        return jsonify({'message': 'Please use POST method'})   