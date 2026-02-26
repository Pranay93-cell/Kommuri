from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# Database configuration
DB_CONFIG = {
    'host': 'localhost',
    'user': 'root',  # Update with your username
    'password': 'Kumar@93',   # Update with your password
    'database': 'kommuri_db'
}

def get_db_connection():
    return mysql.connector.connect(**DB_CONFIG)

# Raw SQL queries using MySQL C56  onnector
@app.route('/api/services', methods=['GET'])
def get_services():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM services")
    services = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(services)
@app.route('/api/services', methods=['GET', 'POST'])
def add_service():
    data = request.get_json()
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO services (title, description, price) VALUES (%s, %s, %s)", 
                   (data['title'], data['description'], data.get('price')))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({'message': 'Service added'}), 201

@app.route('/api/gallery', methods=['GET'])
def get_gallery():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    # allow optional filtering by service_id
    service_id = request.args.get('service_id')
    if service_id:
        cursor.execute("SELECT * FROM gallery WHERE service_id = %s", (service_id,))
    else:
        cursor.execute("SELECT * FROM gallery")
    gallery = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(gallery)

@app.route('/api/gallery', methods=['POST'])
def add_gallery_item():
    data = request.get_json()
    conn = get_db_connection()
    cursor = conn.cursor()
    # expecting service_id to link gallery item to a service
    cursor.execute(
        "INSERT INTO gallery (title, image_url, description, service_id) VALUES (%s, %s, %s, %s)", 
        (
            data['title'],
            data['image_url'],
            data.get('description'),
            data.get('service_id')
        )
    )
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({'message': 'Gallery item added'}), 201

@app.route('/api/contact', methods=['GET'])
def get_contacts():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM contact")
    contacts = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(contacts)

@app.route('/api/contact', methods=['POST'])
def add_contact():
    data = request.get_json()
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO contact (name, email, message) VALUES (%s, %s, %s)", 
                   (data['name'], data['email'], data['message']))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({'message': 'Message sent'}), 201

@app.route('/api/contact_info', methods=['GET'])
def get_contact_info():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM contact_info")
    info = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(info)

@app.route('/api/home', methods=['GET'])
def home():
    return jsonify({"message": "Welcome to Kommuri Printers!"})


if __name__ == '__main__':
    app.run(debug=True, port=5000)