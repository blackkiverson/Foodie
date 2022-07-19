import { StyleSheet, View, SafeAreaView } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

/**
 * It returns a View component that contains a LinearGradient component.
 * @returns A View component with a LinearGradient component inside of it.
 */
const LGContainer = () => {
  return (
    <View>
      <LinearGradient colors={['#1B3287', '#0D0225']} style={styles.gradient}></LinearGradient>
    </View>
  );
};

/* Creating a stylesheet object that contains two objects: gradient and container. */
const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        flex: 1,
        marginHorizontal: 15,
    }
});

export default LGContainer;