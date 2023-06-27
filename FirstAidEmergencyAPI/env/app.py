from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Integer, String, Float, Column
from flask_migrate import Migrate
from flask_cors import CORS


'''
Initialize the Flask app and configure the database:
'''
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///hospitals.db'  # Replace with your database URI
db = SQLAlchemy(app)
migrate = Migrate(app, db)
CORS(app)

'''
Define the Hospital model:
'''
class Hospital(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(200), nullable=False)
    latitude = db.Column(db.Float, nullable=False)
    longitude = db.Column(db.Float, nullable=False)

'''
Create the API endpoint to fetch the list of hospitals
'''
@app.route('/api/hospitals', methods=['GET'])
def get_hospitals():
    hospitals = Hospital.query.all()
    hospital_list = []
    for hospital in hospitals:
        hospital_data = {
            'id': hospital.id,
            'name': hospital.name,
            'address': hospital.address,
            'latitude': hospital.latitude,
            'longitude': hospital.longitude
        }
        hospital_list.append(hospital_data)
    return jsonify(hospital_list)
#Run the app
if __name__ == '__main__':
    app.run(debug=True)
