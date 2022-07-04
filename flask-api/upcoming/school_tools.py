from flask import Blueprint, request, jsonify
import random
import json, requests


from helpers import *
school_tools = Blueprint('school_tools', __name__)

@school_tools.route('/school/teacher/add', methods=['POST'])
def add_teacher():
    content_type = request.headers.get('Content-Type')
    teachers = Table('teachers', 'email', 'code')
    if content_type == 'application/json':
        data = request.get_json()

        email = data['email']
        
        # check if email already exists
        if teachers.getone('email', email) is not None:
            return jsonify({'message': 'Teacher already exists'})
        else:
            code = random.randint(100000, 999999)
            teachers.insert(email, code)
            return jsonify({'message': 'Teacher added successfully with code: ' + str(code)})
    else:
        return jsonify({'message': 'Content-Type must be application/json'})
    
@school_tools.route('/school/teacher/remove', methods=['POST'])
def remove_teacher():
    content_type = request.headers.get('Content-Type')
    teachers = Table('teachers', 'email')
    if content_type == 'application/json':
        data = request.get_json()

        email = data['email']
        
        # check if email already exists
        if teachers.getone('email', email) is None:
            return jsonify({'message': 'Teacher does not exist'})
        else:
            teachers.deleteone('email', email)
            return jsonify({'message': 'Teacher removed successfully'})
    else:
        return jsonify({'message': 'Content-Type must be application/json'})

@school_tools.route('/school/student/add', methods=['GET'])
def add_student():
    content_type = request.headers.get('Content-Type')
    students = Table('students', 'email', 'code')
    if content_type == 'application/json':
        data = request.get_json()

        email = data['email']
        code =  data['code']
        # check if email already exists
        if students.getone('email', email) is not None:
            return jsonify({'message': 'Student already exists'})
        else:
            students.insert(email, code)
            return jsonify({'message': 'Student added successfully'})
    else:
        return jsonify({'message': 'Content-Type must be application/json'})

@school_tools.route('/school/student/remove', methods=['GET'])
def remove_student():
    content_type = request.headers.get('Content-Type')
    students = Table('students', 'email')
    if content_type == 'application/json':
        data = request.get_json()

        email = data['email']

        # check if email already exists
        if students.getone('email', email) is None:
            return jsonify({'message': 'Student does not exist'})
        else:
            students.deleteone('email', email)
            return jsonify({'message': 'Student removed successfully'})
    else:
        return jsonify({'message': 'Content-Type must be application/json'})
