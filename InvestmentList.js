import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const investmentOpportunities = [
  { id: '1', title: 'Business Expansion Loan', amount: '$50,000', interestRate: '5%' },
  { id: '2', title: 'Equipment Purchase Loan', amount: '$30,000', interestRate: '4.5%' },
  { id: '3', title: 'Working Capital Loan', amount: '$20,000', interestRate: '6%' },
  { id: '4', title: 'Business Expansion Loan', amount: '$50,000', interestRate: '5%' },
  { id: '5', title: 'Equipment Purchase Loan', amount: '$30,000', interestRate: '4.5%' },
  { id: '6', title: 'Working Capital Loan', amount: '$20,000', interestRate: '6%' },
  { id: '7', title: 'Business Expansion Loan', amount: '$50,000', interestRate: '5%' },
  { id: '8', title: 'Equipment Purchase Loan', amount: '$30,000', interestRate: '4.5%' },
  { id: '9', title: 'Working Capital Loan', amount: '$20,000', interestRate: '6%' },
];

const InvestmentList = () => {
  const navigation = useNavigation();

  const handlePress = (item) => {
    navigation.navigate('InvestmentDetail', { item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handlePress(item)}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.details}>Amount: {item.amount}</Text>
      <Text style={styles.details}>Interest Rate: {item.interestRate}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Investment Opportunities</Text>
        <FlatList
          data={investmentOpportunities}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  list: {
    paddingBottom: 20,
  },
  item: {
    backgroundColor: '#FFF',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#0057D8',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0057D8',
  },
  details: {
    fontSize: 14,
    color: '#333',
  },
});

export default InvestmentList;
