from flask import Blueprint, request, jsonify
import json, requests

from helpers import *

account = Blueprint('account', __name__)

@account.route('/register', methods=['POST', 'GET'])
def register():
    content_type = request.headers.get('Content-Type')
    table = Table('users', "email", "password", "first_name", "last_name", "account_value")
    if content_type == 'application/json':
        
        data = request.get_json()
        email = data['email']
        password = data['password']
        first_name =   data['first_name']
        last_name = data['last_name']
        account_value = 10000

        if isnewuser(email):
            table.insert(email, password, first_name, last_name, account_value)
            return jsonify({'message': 'User created successfully'})
        else:
            return jsonify({'message': 'User already exists'})
    else:
        return jsonify({'message': 'Please use POST method'})

@account.route('/login', methods=['POST', 'GET'])
def login():
    users = Table('users', "email", "password", "first_name", "last_name", "account_value")
    content_type = request.headers.get('Content-Type')
    if content_type == 'application/json':
        data = request.get_json()
        email = data['email']
        password = data['password']

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