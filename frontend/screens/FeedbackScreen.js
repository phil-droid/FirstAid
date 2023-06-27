import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleFeedbackPress = () => {
    // Handle feedback button press
    // You can navigate to the RatingScreen component here
    navigation.navigate('Rating');
  };

  const handleReportIssuePress = () => {
    // Handle report issue button press
    const recipientEmail = 'onedev@gmail.com';
    const url = `mailto:${recipientEmail}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          console.log("Opening email app is not supported");
        }
      })
      .catch((error) => {
        console.log("An error occurred while opening email app:", error);
      });
  };

  const handleContactSupportPress = () => {
    // Handle contact support button press
    navigation.navigate('ContactSupport');
  };

  const handleAboutDeveloperPress = () => {
    // Handle About the Developer button press
    navigation.navigate('About');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <TouchableOpacity style={styles.button} onPress={handleFeedbackPress}>
        <Text style={styles.buttonText}>Provide Feedback</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleReportIssuePress}>
        <Text style={styles.buttonText}>Report Issue</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleContactSupportPress}>
        <Text style={styles.buttonText}>Contact Support</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleAboutDeveloperPress}>
        <Text style={styles.buttonText}>About the Developer</Text>
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

export default HomeScreen;
