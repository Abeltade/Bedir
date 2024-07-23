import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const BorrowerProfile = ({ route }) => {
  const { profile, reviews } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Borrower Profile</Text>
      <Text style={styles.profile}>{profile}</Text>
      <Text style={styles.header}>Lender Reviews and Ratings</Text>
      {reviews.map((review, index) => (
        <View key={index} style={styles.review}>
          <Text style={styles.reviewText}>{review}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
   fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    marginTop: 40,
    padding: 10,
    backgroundColor: '#007BFF',
    textAlign: 'center',
  },
  profile: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    lineHeight: 24,
  },
  review: {
    marginBottom: 15,
  },
  reviewText: {
    fontSize: 16,
    color: '#0057D8',
  },
});

export default BorrowerProfile;
