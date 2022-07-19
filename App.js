import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './src/screens/SplashScreen';

/**
 * The App function returns a View component that contains a SplashScreen component and a StatusBar
 * component
 * @returns A view with a splash screen and a status bar.
 */
export default function App() {
  return (
    <View style={styles.container}>
      <SplashScreen />
      <StatusBar style="auto" />
    </View>
  );
}

/* Creating a style sheet for the app. */
const styles = StyleSheet.create({
  container: {
    /* Telling the view to take up all the space available. */
    flex: 1,
    /* Centering the content of the view. */
    justifyContent: 'center',
  },
});
