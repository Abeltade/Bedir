import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
import { ProgressBar } from 'react-native-paper'; // Ensure you have installed react-native-paper
import { useNavigation } from '@react-navigation/native';

const InvestmentDetail = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();

  const handleViewDescription = () => {
    navigation.navigate('LoanDescription', {
      description: 'Comprehensive business plan for expansion into new markets.',
      documents: ['Loan Agreement', 'Business Plan'],
    });
  };

  const handleViewProfile = () => {
    navigation.navigate('BorrowerProfile', {
      profile: "John's Tech has a strong history of profitability and growth.",
      reviews: ['Great business', 'Reliable borrower', 'Good investment'],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Investment Details</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <View style={styles.trustScoreContainer}>
            <View style={styles.trustBadge}>
              <Text style={styles.trustBadgeText}>ABS</Text>
            </View>
            <View style={styles.trustBadge}>
              <Text style={styles.trustBadgeText}>Shield</Text>
            </View>
            <Text style={styles.trustScore}>Trust score</Text>
            <Text style={styles.trustScoreValue}>B+</Text>
          </View>
          <Text style={styles.loanTitle}>SANDBOX FUNDING</Text>
          <Text style={styles.location}>Latvia</Text>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.label}>Interest rate</Text>
              <Text style={styles.value}>13.25%</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.label}>Penalty</Text>
              <Text style={styles.value}>+10.00%</Text>
            </View>
          </View>
          <View style={styles.detailsSection}>
            <Text style={styles.label}>Underlying assets</Text>
            <Text style={styles.value}>10</Text>
          </View>
          <View style={styles.detailsSection}>
            <Text style={styles.label}>Interest payment</Text>
            <Text style={styles.value}>Monthly</Text>
          </View>
          <View style={styles.detailsSection}>
            <Text style={styles.label}>Repayment in</Text>
            <Text style={styles.value}>688 days</Text>
          </View>
          <View style={styles.detailsSection}>
            <Text style={styles.label}>Loan ID</Text>
            <Text style={styles.value}>#12345</Text>
          </View>
          <View style={styles.detailsSection}>
            <Text style={styles.label}>Loan Amount</Text>
            <Text style={styles.value}>€134,000.00</Text>
          </View>
          <View style={styles.detailsSection}>
            <Text style={styles.label}>Loan Term</Text>
            <Text style={styles.value}>24 months</Text>
          </View>
          <View style={styles.detailsSection}>
            <Text style={styles.label}>Borrower Information</Text>
            <Text style={styles.value}>John's Tech</Text>
          </View>
          <View style={styles.detailsSection}>
            <Text style={styles.label}>Loan Purpose</Text>
            <Text style={styles.value}>Business expansion</Text>
          </View>
          <View style={styles.detailsSection}>
            <Text style={styles.label}>Risk Rating</Text>
            <Text style={styles.value}>B</Text>
          </View>
          <View style={styles.detailsSection}>
            <Text style={styles.label}>Loan Status</Text>
            <Text style={styles.value}>Open</Text>
          </View>
          <View style={styles.detailsSection}>
            <Text style={styles.label}>Funding Progress</Text>
            <ProgressBar progress={0.68} color={'#0057D8'} style={styles.progressBar} />
            <Text style={styles.value}>68%</Text>
          </View>
          <View style={styles.detailsSection}>
            <Text style={styles.label}>Remaining Amount</Text>
            <Text style={styles.value}>€43,103.13</Text>
          </View>
          <View style={styles.detailsSection}>
            <Text style={styles.label}>Collateral</Text>
            <Text style={styles.value}>None</Text>
          </View>
          <View style={styles.detailsSection}>
            <Text style={styles.label}>Repayment Schedule</Text>
            <Text style={styles.value}>Monthly installments</Text>
          </View>
          <View style={styles.detailsSection}>
            <Text style={styles.label}>Lender Reviews and Ratings</Text>
            <Text style={styles.value}>4.5/5 from 20 reviews.</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleViewDescription}>
              <Text style={styles.buttonText}>View Loan Description</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleViewProfile}>
              <Text style={styles.buttonText}>View Borrower Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => alert('Invest Now button clicked')}>
              <Text style={styles.buttonText}>INVEST</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    marginTop: 36,
    padding: 10,
    backgroundColor: '#007BFF',
    textAlign: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  trustScoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  trustBadge: {
    backgroundColor: '#0057D8',
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  trustBadgeText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  trustScore: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0057D8',
    marginLeft: 10,
  },
  trustScoreValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0057D8',
    marginLeft: 5,
  },
  loanTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  column: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: '#666',
  },
  value: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  detailsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#0057D8',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default InvestmentDetail;
