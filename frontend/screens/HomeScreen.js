import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <Icon name="heartbeat" size={40} color="#4287f5" />
      <Text style={styles.title}>FirstAid & Emergency App</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToScreen('EmergencyInstructions')}
      >
        <Text style={styles.buttonText}>Emergency Instructions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToScreen('EmergencyContacts')}
      >
        <Text style={styles.buttonText}>Emergency Contacts</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToScreen('NearbyHospitals')}
      >
        <Text style={styles.buttonText}>Nearby Hospitals</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToScreen('FirstAidKit')}
      >
        <Text style={styles.buttonText}>First Aid Kit Checklist</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToScreen('Notifications')}
      >
        <Text style={styles.buttonText}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToScreen('Feedback')}
      >
        <Text style={styles.buttonText}>Feedback</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  button: {
    width: '100%',
    padding: 16,
    backgroundColor: '#4287f5',
    marginBottom: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
