from flask import Blueprint, request, jsonify
import json, requests

from helpers import *

premium = Blueprint('premium', __name__)


# give user premuem access to the application in a new table
@premium.route('/premium/add', methods=['POST', 'GET'])
def premium_add():
    content_type = request.headers.get('Content-Type')
    premum_users = Table('premium_users', "email")
    if content_type == 'application/json':
        data = request.get_json()

        email = data['email']
        if premum_users.getone('email', email):
            return jsonify({'message': 'User already premium'})
        else:
            premum_users.insert('email', email)
            return jsonify({'message': 'User added to premium'})
    else:
        return jsonify({'message': 'Please use POST method'})

@premium.route('/premium/remove', methods=['POST', 'GET'])
def premium_remove():
    content_type = request.headers.get('Content-Type')
    premum_users = Table('premium_users', "email")
    if content_type == 'application/json':
        data = request.get_json()

        email = data['email']
        if premum_users.getone('email', email):
            premum_users.delete('email', email)
            return jsonify({'message': 'User removed from premium'})
        else:
            return jsonify({'message': 'User not premium'})
    else:
        return jsonify({'message': 'Please use POST method'})

@premium.route('/premium/check', methods=['POST', 'GET'])
def premium_check():
    content_type = request.headers.get('Content-Type')
    premum_users = Table('premium_users', "email")
    if content_type == 'application/json':
        data = request.get_json()

        email = data['email']
        if premum_users.getone('email', email):
            return jsonify({'message': 'User is premium'})
        else:
            return jsonify({'message': 'User is not premium'})
    else:
        return jsonify({'message': 'Please use POST method'})

@premium.route('/premium/users', methods=['POST', 'GET'])
def premium_users():
    content_type = request.headers.get('Content-Type')
    premum_users = Table('premium_users', "email")
    if content_type == 'application/json':
        users = premum_users.getall('email')
        return jsonify({'users': users})
    else:
        return jsonify({'message': 'Please use POST method'})