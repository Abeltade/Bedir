import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoanDescription = ({ route }) => {
  const { description, documents } = route.params;
  const navigation = useNavigation();

  const handleDocumentClick = (doc) => {
    navigation.navigate('PDFViewer');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Loan Description</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.header}>Loan Documents</Text>
      {documents.map((doc, index) => (
        <TouchableOpacity key={index} style={styles.document} onPress={() => handleDocumentClick(doc)}>
          <Text style={styles.documentText}>{doc}</Text>
        </TouchableOpacity>
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
    color: '#0057D8',
    marginBottom: 20,
    marginTop: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    lineHeight: 24,
  },
  document: {
    marginBottom: 15,
  },
  documentText: {
    fontSize: 16,
    color: '#0057D8',
  },
});

export default LoanDescription;
