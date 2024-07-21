import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const InvestorSignupScreen = ({ onLogin }) => {
  const [email, setEmail] = useState(''); // State for email
  const [password1, setPassword] = useState(''); // State for password
  const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password
  const [fullName, setFullName] = useState(''); // State for full name
  const [phoneNumber, setPhoneNumber] = useState(''); // State for phone number
  const navigation = useNavigation();

  const handleSignup = () => {
    if (password1 !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
	else if(!email.trim() || !password1.trim() || !confirmPassword.trim() || !fullName.trim() || !phoneNumber.trim()){
		alert('Please insert the missed values');
	}
	else{
    // Implement signup logic here

    alert('Investor registration successful!');
    navigation.navigate('Login');
	}
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/loan.png')} // Update with your logo
          style={styles.logo}
        />
        <Text style={styles.companyName}>Bedir Capital</Text>
        <Text style={styles.tagline}>Investments – At Your Doorstep.</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password1}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
	marginTop: 1,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  tagline: {
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  
});

export default InvestorSignupScreen;
