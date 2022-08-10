import { StyleSheet, View, Image, } from 'react-native';
import React from 'react';
import Logo from '../../assets/img/FoodieLogoBlack.png';
import CustomInput from '../components/CustomInput';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo}/>
      <CustomInput></CustomInput>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {},
  container: {
    alignItems: "center",
    backgroundColor: "#B87B4E",    
    padding: 120,
    flex: 1,
  },
  logo: {
    width: '100%',
    height: '20%',
  },
});

export default SignUp;