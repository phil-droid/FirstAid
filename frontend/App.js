import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './screens/HomeScreen';
import EmergencyInstructionsScreen from './screens/EmergencyInstructionsScreen';
import EmergencyContactsScreen from './screens/EmergencyContactsScreen';
import NearbyHospitalsScreen from './screens/NearbyHospitalsScreen';
import FirstAidKitScreen from './screens/FirstAidKitScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import RatingScreen from './screens/RatingScreen';
import AboutTheDeveloper from './screens/AboutTheDeveloper';
import ContactSupportScreen from './screens/ContactSupportScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EmergencyInstructions" component={EmergencyInstructionsScreen} />
        <Stack.Screen name="EmergencyContacts" component={EmergencyContactsScreen} />
        <Stack.Screen name="NearbyHospitals" component={NearbyHospitalsScreen} />
        <Stack.Screen name="FirstAidKit" component={FirstAidKitScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} />
        <Stack.Screen name="Rating" component={RatingScreen} />
        <Stack.Screen name="About" component={AboutTheDeveloper} />
        <Stack.Screen name="ContactSupport" component={ContactSupportScreen} />
        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
