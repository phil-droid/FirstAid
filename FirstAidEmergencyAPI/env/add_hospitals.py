from app import app, db, Hospital
from flask import current_app

# Ensure the app context is active
with app.app_context():
    # Define the list of hospitals to populate the database
    hospitals = [
        {
            'name': 'Hospital A',
            'address': '123 Main St, City A',
            'latitude': 123.456,
            'longitude': 789.012
        },
        {
            'name': 'Hospital B',
            'address': '456 Elm St, City B',
            'latitude': 345.678,
            'longitude': 901.234
        },
        {
            'name': 'Hospital C',
            'address': '789 Oak St, City C',
            'latitude': 567.890,
            'longitude': 123.456
        },
        {
            'name': 'Hospital D',
            'address': '789 York St, City D',
            'latitude': 507.390,
            'longitude': 103.226
        },
        {
            'name': 'Hospital E',
            'address': '789 Bell Av, City E',
            'latitude': 267.800,
            'longitude': 118.408
        },
        {
            'name': 'Hospital F',
            'address': '789 Hindi St, City F',
            'latitude': 387.125,
            'longitude': 098.654
        }
        # Add more hospitals as needed
    ]

    # Iterate over the hospitals and add them to the database
    with current_app.app_context():
        for hospital_data in hospitals:
            hospital = Hospital(
                name=hospital_data['name'],
                address=hospital_data['address'],
                latitude=hospital_data['latitude'],
                longitude=hospital_data['longitude']
            )
            db.session.add(hospital)

        # Commit the changes to the database
        db.session.commit()

    print("Hospitals added successfully!")
