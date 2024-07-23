import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreenComponent from './SplashScreenComponent';
import LoginScreen from './LoginScreen';
import Dashboard from './Dashboard';
import SignUp from './SignUp';
import InvestmentList from './InvestmentList';
import InvestmentDetail from './InvestmentDetail';
import BorrowerProfile from './BorrowerProfile';
import LoanDescription from './LoanDescription';
import PDFViewer from './PDFViewer';
import PDFScreen from './PDFScreen';

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
			<Stack.Screen name="InvestmentDetail" component={InvestmentDetail} />
			<Stack.Screen name="InvestmentList" component={InvestmentList} />
			<Stack.Screen name="BorrowerProfile" component={BorrowerProfile} />
			<Stack.Screen name="LoanDescription" component={LoanDescription} />
			<Stack.Screen name="PDFViewer" component={PDFViewer} />
			<Stack.Screen name="PDFScreen" component={PDFScreen} />

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
