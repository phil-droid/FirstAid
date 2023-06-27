import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RatingScreen = () => {
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const navigation = useNavigation();

  const handleRatePress = (rating) => {
    // Handle rate button press
    // Set the feedback message based on the selected rating
    // For simplicity, let's just set a generic message
    setFeedbackMessage('Thank you for your feedback');

    // Delay the navigation back to the home screen for a better user experience
    setTimeout(() => {
      navigation.goBack(); // Navigate back to the previous screen (home screen)
    }, 1500); // Wait for 1.5 seconds before navigating back
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate the App</Text>
      <TouchableOpacity style={styles.ratingButton} onPress={() => handleRatePress(1)}>
        <Text style={styles.buttonText}>1 Star</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ratingButton} onPress={() => handleRatePress(2)}>
        <Text style={styles.buttonText}>2 Stars</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ratingButton} onPress={() => handleRatePress(3)}>
        <Text style={styles.buttonText}>3 Stars</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ratingButton} onPress={() => handleRatePress(4)}>
        <Text style={styles.buttonText}>4 Stars</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ratingButton} onPress={() => handleRatePress(5)}>
        <Text style={styles.buttonText}>5 Stars</Text>
      </TouchableOpacity>
      {feedbackMessage !== '' && <Text style={styles.feedbackText}>{feedbackMessage}</Text>}
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
  ratingButton: {
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
  feedbackText: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RatingScreen;
