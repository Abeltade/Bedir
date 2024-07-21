import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const SplashScreenComponent = ({ onFinish }) => {
  const [appIsReady, setAppIsReady] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load any resources or data here
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a delay
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        SplashScreen.hideAsync();
        setTimeout(() => {
          onFinish();
        }, 3000); // Navigate to login after 3 seconds
      });
    }
  }, [appIsReady, fadeAnim]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('./assets/loan.png')} // Update with your logo
        style={[styles.logo, { opacity: fadeAnim }]}
      />
      <Animated.Text style={[styles.companyName, { opacity: fadeAnim }]}>
        Bedir Capital
      </Animated.Text>
      <Animated.Text style={[styles.tagline, { opacity: fadeAnim }]}>
        Investments – At Your Doorstep.
      </Animated.Text>
      <Animated.Text style={[styles.footerText, { opacity: fadeAnim }]}>
        Brought to you by
      </Animated.Text>
      <Animated.Image
        source={require('./assets/tech.png')} // Update with your Reedos logo
        style={[styles.footerLogo, { opacity: fadeAnim }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
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
    marginBottom: 50,
  },
  footerText: {
    fontSize: 12,
    color: '#000',
    position: 'absolute',
    bottom: 50,
  },
  footerLogo: {
    width: 100,
    height: 50,
    position: 'absolute',
    bottom: 10,
  },
});

export default SplashScreenComponent;
