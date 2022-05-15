from api import cg

class MyCoinHelper:
    def __init__(self, coin_data):
        self.coin_data = cg
    
    def get_price(self, ids, vs_currencies='usd'):
        return self.coin_data.get_price(ids=ids, vs_currencies=vs_currencies)
    
    def get_coin_description(self, ids):
        data = self.coin_data.get_coin_by_id(ids=ids)
        return data['description']['en']
    
    def get_coin_name(self, ids):
        data = self.coin_data.get_coin_by_id(ids=ids)
        return data['name']