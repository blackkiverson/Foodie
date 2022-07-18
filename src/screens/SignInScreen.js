import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Logo from '../../assets/img/FoodieLogo.png';

const SignInScreen = () => {
  return (
    <View>
      <Image source={Logo} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 66,
    height: 58,
  },
});

export default SignInScreen;