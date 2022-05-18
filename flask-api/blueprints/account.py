from flask import Blueprint, request, jsonify
import json, requests

from helpers import *

account = Blueprint('account', __name__)

@account.route('/account/login', methods=['POST', 'GET'])
def accountLogin():
    content_type = request.headers.get('Content-Type')
    users = Table('users', "email", "first_name", "last_name", "account_value")
    if content_type == 'application/json':
        
        data = request.get_json()
        email = data['email']
        first_name =   data['given_name']
        last_name = data['family_name']
        account_value = 10000

        if isnewuser(email):
            users.insert(email, first_name, last_name, account_value)
            return jsonify({"message": 'User created successfully'})
        else:
            return jsonify({'message': 'Returning user'})
    else:
        return jsonify({'message': 'Please use POST method'})