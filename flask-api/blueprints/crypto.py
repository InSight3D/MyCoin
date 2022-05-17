from flask import Blueprint, request, jsonify
import json, requests


from helpers import *
from pycoingecko import CoinGeckoAPI
cg = CoinGeckoAPI()
mycoin_helper = MyCoinHelper(cg)

crypto = Blueprint('crypto', __name__)

@crypto.route('/tradingview/widget', methods=['POST', 'GET'])
def tradingview_widget():
    content_type = request.headers.get('Content-Type')
    if content_type == 'application/json':
        data = request.get_json()
        token = data['token']
    
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
@crypto.route('/token/price', methods=['POST', 'GET'])
def price():
    content_type = request.headers.get('Content-Type')
    if content_type == 'application/json':
        data = request.get_json()
        token = data['token']
        price = cg.get_price(ids=token, vs_currencies='usd')
        return jsonify({'price': price})
    else:
        return jsonify({'message': 'Please use POST method'})

# get token description from ticker and return in json format
@crypto.route('/token/description', methods=['POST', 'GET'])
def description():
    content_type = request.headers.get('Content-Type')
    if content_type == 'application/json':
        data = request.get_json()
        token = data['token']

        description = mycoin_helper.get_description(token)
        return jsonify({'description': description})
    else:
        return jsonify({'message': 'Please use POST method'})