import { StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import { LinearGradient } from 'react-native-linear-gradient';

/**
 * LGContainer is a function that takes in a child component and returns a LinearGradient component
 * with a SafeAreaView component as a child.
 * @returns A function that returns a component.
 */
const LGContainer = (children) => {
  return (
    <LinearGradient colors={['#1B3287', '#0D0225']} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        {children}
      </SafeAreaView>
    </LinearGradient>
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