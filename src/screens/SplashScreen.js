import {View, Image, StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react';
import Logo from '../../assets/img/FoodieLogoWhite.png';
import { LinearGradient } from 'expo-linear-gradient';

/**
 * The height of the Image component is set to the height of the screen multiplied by 0.3.
 * 
 * The height of the screen is obtained using the useWindowDimensions hook.
 * 
 * The useWindowDimensions hook is imported from the react-native-hooks library.
 */
const SplashScreen = () => {
  const {height} = useWindowDimensions();

  return (
    <View>
      <LinearGradient colors={["#1B3287", "#0D0225"]} style={styles.background}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          /* Making the image fit inside the view. */
          resizeMode="contain"
        />
      </LinearGradient>
    </View>
  );
};

/* Creating a styles object. */
const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  logo: {    
    /* Setting the maxWidth of the image to 70% of the width of the screen. It is setting the maxHeight
    of the image to 100% of the height of the screen. It is setting the flex of the image to 1. */
    maxWidth: '70%',
    maxHeight: '100%',
    flex: 1,
  },
});

export default SplashScreen;