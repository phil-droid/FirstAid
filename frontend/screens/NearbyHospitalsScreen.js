import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NearbyHospitalsScreen = () => {
  const [hospitals, setHospitals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchHospitals();
  }, []);

  const fetchHospitals = () => {
    console.log('Fetching hospitals...');
    fetch('http://127.0.0.1:5000/api/hospitals')  // Update the URL here
      .then((response) => response.json())
      .then((data) => {
        console.log('Hospitals data:', data);
        setHospitals(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching hospitals:', error);
        setIsLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nearby Hospitals</Text>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : hospitals.length > 0 ? (
        hospitals.map((hospital) => (
          <View key={hospital.id} style={styles.hospitalItem}>
            <Text style={styles.hospitalName}>{hospital.name}</Text>
            <Text style={styles.hospitalAddress}>{hospital.address}</Text>
          </View>
        ))
      ) : (
        <Text>No hospitals found.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  hospitalItem: {
    marginBottom: 8,
  },
  hospitalName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  hospitalAddress: {
    fontSize: 16,
  },
});

export default NearbyHospitalsScreen;
