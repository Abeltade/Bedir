import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreenComponent from './SplashScreenComponent';
import LoginScreen from './LoginScreen';
import Dashboard from './Dashboard';
import SignUp from './SignUp';


const Stack = createNativeStackNavigator();

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleSignup = () => {
    console.log('Signup pressed');
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password pressed');
  };

  const handleSplashFinish = () => {
    setShowLogin(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {showLogin ? (
          <>
            <Stack.Screen name="Login">
              {props => (
                <LoginScreen 
                  {...props}
                  onSignup={handleSignup} 
                  onForgotPassword={handleForgotPassword} 
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="Dashboard" component={Dashboard} />
			<Stack.Screen name="SignUp" component={SignUp} />
          </>
        ) : (
          <Stack.Screen name="Splash">
            {props => (
              <SplashScreenComponent {...props} onFinish={handleSplashFinish} />
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
