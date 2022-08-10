import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder='Full Name' style={styles.input}/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {},
    input: {},
});

export default CustomInput;