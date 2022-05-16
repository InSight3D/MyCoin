import time
from flask import Flask, request, jsonify, Blueprint
from flask_mysqldb import MySQL
from pycoingecko import CoinGeckoAPI
from flask_cors import CORS, cross_origin
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

# Helpers Import

# Instantiate Apps
mysql = MySQL(app)
cg = CoinGeckoAPI()
from helpers import *
mycoin_helper = MyCoinHelper(cg)



CORS(app, support_credentials=True, resources={r"/*": {"origins": "*"}}, headers="Content-Type", send_wildcard=True)


# Tool Imports
from upcoming.school_tools import *
from blueprints.premium import *
from blueprints.trading import *
from blueprints.crypto import *
from blueprints.account import *

# Rigister blueprints
app.register_blueprint(school_tools)
app.register_blueprint(premium)
app.register_blueprint(trading)
app.register_blueprint(crypto)
app.register_blueprint(account)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')