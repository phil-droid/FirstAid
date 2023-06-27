import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const EmergencyInstructionsScreen = () => {
  const emergencies = [
    { name: 'CPR', procedure: 'Perform chest compressions and rescue breaths.\n Call emergency services.' },
    { name: 'Choking', procedure: 'Perform abdominal thrusts.\n If the person becomes unconscious, start CPR.' },
    { name: 'Bleeding Control', procedure: 'Apply direct pressure to the wound.\n Elevate the injured area if possible.' },
    { name: 'Burns', procedure: 'Remove the person from the source of burn.\n Cool the burn with cool water.\n Cover the burn with a sterile dressing.' },
    { name: 'Fractures', procedure: 'Immobilize the injured area.\n Apply ice to reduce swelling.\n Seek medical help.' },
    { name: 'Snake Bites', procedure: 'Keep the person calm and immobile.\n Remove any tight clothing or jewelry near the bite.\n Seek medical help.' },
    { name: 'Shark Attacks', procedure: 'Get the person out of the water.\n Apply pressure to stop bleeding.\n Perform CPR if necessary.\n Seek medical help if bleeding persists.' },
    { name: 'Electric Shock', procedure: 'Ensure the person is no longer in contact with the electrical source.\n Perform CPR if necessary.\n Seek medical help.' },
  ];

  const renderEmergencyItem = (emergency) => {
    return (
      <TouchableOpacity style={styles.emergencyItem} key={emergency.name}>
        <Text style={styles.emergencyName}>{emergency.name}</Text>
        <Text style={styles.emergencyProcedure}>{emergency.procedure}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {emergencies.map((emergency) => (
        <View key={emergency.name}>{renderEmergencyItem(emergency)}</View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  emergencyItem: {
    marginBottom: 16,
  },
  emergencyName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  emergencyProcedure: {
    fontSize: 16,
  },
});

export default EmergencyInstructionsScreen;
