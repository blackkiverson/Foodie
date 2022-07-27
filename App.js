import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
/*import SignUp from './src/screens/SignUp';*/
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator;

/**
 * The App function returns a View component that contains a SplashScreen component and a StatusBar
 * component
 * @returns A view with a splash screen and a status bar.
 */
export default function App() {
  return (
    <NavigationContainer>
        <View style={styles.container}>
          <SplashScreen/>
          <StatusBar style="auto"/>
        </View>
    </NavigationContainer>
  );
}

/* Creating a style sheet for the app. */
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    /* Telling the view to take up all the space available. */
    flex: 1,
    /* Centering the content of the view. */
    justifyContent: 'center',
  },
});
