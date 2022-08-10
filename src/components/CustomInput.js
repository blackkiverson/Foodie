import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

const CustomInput = ({ value, setValue, placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput value={value} onChange={setValue} placeholder={placeholder} style={styles.input}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    /* It's making the input twice as wide as it's parent. */
    width: '200%',
    height: 40,

    borderColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {},
});

export default CustomInput;