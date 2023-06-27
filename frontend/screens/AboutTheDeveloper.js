import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AboutTheDeveloper = () => {
  const navigation = useNavigation();

  const handleLinkedInPress = () => {
    // Handle LinkedIn button press
    const linkedinURL = 'https://www.linkedin.com/in/phil-collins-nairobi/';
    Linking.openURL(linkedinURL);
  };

  const handleGitHubPress = () => {
    // Handle GitHub button press
    const githubURL = 'https://github.com/phil-droid';
    Linking.openURL(githubURL);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About the Developer</Text>
      <TouchableOpacity style={styles.button} onPress={handleLinkedInPress}>
        <Text style={styles.buttonText}>LinkedIn</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleGitHubPress}>
        <Text style={styles.buttonText}>GitHub</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AboutTheDeveloper;
