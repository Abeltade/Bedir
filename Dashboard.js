import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image style={styles.profilePic} source={require('./assets/loan.png')} />
        <Text style={styles.userName}>John Doe</Text>
        <View style={styles.icons}>
          <TouchableOpacity>
            <Image style={styles.icon} source={require('./assets/notification.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.icon} source={require('./assets/menu.png')} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Summary Section */}
      <View style={styles.summarySection}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryValue}>$50,000</Text>
          <Text style={styles.summaryLabel}>Total Investment</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryValue}>15</Text>
          <Text style={styles.summaryLabel}>Active Loans</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryValue}>$5,000</Text>
          <Text style={styles.summaryLabel}>Total Earnings</Text>
        </View>
      </View>

      {/* Actionable Items Section */}
      <View style={styles.actionsSection}>
        <TouchableOpacity style={styles.actionItem}>
          <Image style={styles.actionIcon} source={require('./assets/earning.png')} />
          <Text style={styles.actionLabel}>Investment Opportunities</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem}>
          <Image style={styles.actionIcon} source={require('./assets/amortized.png')} />
          <Text style={styles.actionLabel}>Loan Repayment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem}>
          <Image style={styles.actionIcon} source={require('./assets/fund.png')} />
          <Text style={styles.actionLabel}>Investment History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem}>
          <Image style={styles.actionIcon} source={require('./assets/time.png')} />
          <Text style={styles.actionLabel}>Account Settings</Text>
        </TouchableOpacity>
      </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
	marginTop: 30,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 15,
  },
  summarySection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50,
  },
  summaryItem: {
    alignItems: 'center',
  },
  summaryValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
  },
  actionsSection: {
    marginTop: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  actionItem: {
    width: '40%',
    alignItems: 'center',
    marginBottom: 40,
  },
  actionIcon: {
    width: 50,
    height: 50,
  },
  actionLabel: {
    marginTop: 20,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default Dashboard;
