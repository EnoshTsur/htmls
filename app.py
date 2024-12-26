from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def get_data():
    return { 'data': { 'name': 'enosh', 'age': 34 } }, 200


@app.route('/add', methods=['POST'])
def post_data():
    data = request.json
    print(data)
    return jsonify({ **data, 'accepted': True }), 200

if __name__ == '__main__':
    app.run(port=5000)