# First Aid App

The First Aid App is a mobile application designed to provide users with essential first aid instructions and emergency information. It aims to empower users with the knowledge and guidance needed to respond effectively to various emergency situations and potentially save lives. The app is developed for the Android platform and utilizes React Native for the frontend and Flask for the backend.

## Project Goals

The primary goals of the First Aid App are:

1. **Emergency Preparedness**: The app aims to educate and prepare users to handle emergency situations by providing detailed instructions on essential first aid procedures for various scenarios.

2. **Accessibility**: The app is designed to be user-friendly and accessible to a wide range of users, ensuring that vital information is readily available in emergency situations.

3. **Empowerment**: The app aims to empower individuals to take immediate action during emergencies by providing clear and concise instructions and information.

4. **Informative**: The app provides relevant and up-to-date information on first aid techniques, emergency contacts, and nearby hospitals for quick access during critical situations.

## Target Audience

The First Aid App is intended for anyone interested in learning and having access to vital first aid information. The target audience includes:

- General users who want to be prepared for emergencies and learn essential first aid techniques.
- Parents and caregivers who want to ensure the safety and well-being of their families.
- Individuals who may find themselves in remote locations or areas with limited access to medical facilities.
- Outdoor enthusiasts, hikers, and adventurers who engage in activities where the risk of accidents or injuries is higher.

## Technologies Used

The First Aid App utilizes the following technologies:

- **Frontend**: The app's frontend is developed using React Native, a popular framework for building cross-platform mobile applications. React Native allows for efficient development and provides a native-like user experience on Android devices.

- **Backend**: The app's backend is built with Flask, a lightweight web framework in Python. Flask enables the handling of data storage, retrieval, and communication with the frontend components.

- **Database**: The app uses an SQLite database to store information such as hospital details, first aid procedures, and emergency contacts. SQLite is a lightweight and easy-to-use database engine suitable for mobile applications.

- **Version Control**: The project utilizes Git for version control, enabling efficient collaboration, tracking changes, and maintaining a reliable codebase.

## Installation and Setup

To run the First Aid App locally, follow these steps:

1. Clone the repository from GitHub: `git clone <repository-url>`
2. Navigate to the project directory: `cd first-aid-app`
3. Install frontend dependencies: `cd frontend && npm install`
4. Install backend dependencies: `cd backend && pip install -r requirements.txt`
5. Set up the database: `python manage.py db upgrade`
6. Start the backend server: `python manage.py runserver`
7. Start the frontend development server: `cd frontend && npm start`

Note: Ensure that you have Node.js, Python, and the necessary dependencies installed on your machine.

## Contribution

Contributions to the First Aid App are welcome and encouraged. If you'd like to contribute, please follow these steps:

1. Fork the repository and create your branch: `git checkout -b my-branch`
2. Make your changes and commit them: `git commit -m 'Add new feature'`
3. Push to your branch: `git push origin my-branch`
4. Create a pull request explaining your changes and their purpose.

Please ensure that your contributions align with the project's goals and adhere to the coding guidelines specified in the repository.

