import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmergencyContactsScreen = () => {
  const emergencyContacts = [
    { name: 'Emergency Services', number: '911' },
    { name: 'Poison Control Center', number: '1-800-222-1222' },
    { name: 'Local Hospital', number: '123-456-7890' },
    { name: 'Fire Department', number: '987-654-3210' },
    { name: 'Ambulance Services', number: '555-123-4567' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency Contacts</Text>
      {emergencyContacts.map((contact, index) => (
        <View key={index} style={styles.contactContainer}>
          <Text style={styles.contactName}>{contact.name}</Text>
          <Text style={styles.contactNumber}>{contact.number}</Text>
        </View>
      ))}
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
  contactContainer: {
    marginBottom: 16,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactNumber: {
    fontSize: 16,
    color: '#666',
  },
});

export default EmergencyContactsScreen;
