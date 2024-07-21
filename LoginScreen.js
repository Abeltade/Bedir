import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({onForgotPassword }) => {
  const [username, setUsername] = useState(''); // State for username
  const [password1, setPassword] = useState(''); // State for password
  const navigation = useNavigation();

  const handleLogin = () => {
    if (username === 'test' && password1 === 'password') {
      // Navigate to Dashboard
      navigation.navigate('Dashboard');
    }else if(!username.trim() || !password1.trim()) 
	{
		alert('please insert username or password');
	}
	
	else {
      alert('Invalid credentials');
    }
  };

  const onSignup = () => {
	  navigation.navigate('SignUp');
  }

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
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password1}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <TouchableOpacity onPress={onForgotPassword}>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSignup}>
        <Text style={styles.link}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Brought to you by</Text>
        <Image
          source={require('./assets/tech.png')} // Update with your Reedos logo
          style={styles.footerLogo}
        />
      </View>
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
    marginBottom: 40,
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
  link: {
    color: '#0000ff',
    marginTop: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#000',
  },
  footerLogo: {
    width: 100,
    height: 50,
    marginTop: 5,
  },
});

export default LoginScreen;
