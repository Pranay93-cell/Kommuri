from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/gallery')
def gallery():
    return jsonify([
        {"id": 1, "title": "Banner Printing", "image": "banner.jpg"},
        {"id": 2, "title": "Flex Printing", "image": "flex.jpg"},
        {"id": 3, "title": "Visiting Cards", "image": "cards.jpg"}
    ])

if __name__ == "__main__":
    app.run(debug=True, port=5000)