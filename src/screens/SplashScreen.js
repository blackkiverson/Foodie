import {View, Text, Image, StyleSheet, useWindowDimensions, SafeAreaView} from 'react-native';
import React from 'react';
import Logo from '../../assets/img/FoodieLogoBlack.png';
import LGContainer from '../components/LGContainer';

/**
 * It returns a View component with an Image component inside it. The Image component has a source of
 * Logo, a style of styles.logo, and a resizeMode of contain.
 * 
 * The styles.logo style is defined in the styles object below.
 * 
 * The height of the Image component is set to the height of the screen multiplied by 0.3.
 * 
 * The height of the screen is obtained using the useWindowDimensions hook.
 * 
 * The useWindowDimensions hook is imported from the react-native-hooks library.
 * 
 * The Logo image is imported from the assets folder.
 * 
 * The View and Image components are imported from the react-native library.
 * 
 * The styles object is defined below.
 * @returns A view with an image inside of it.
 */
const SplashScreen = () => {
  const {height} = useWindowDimensions();

  return (
    <View style={styles.root}>        
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />
    </View>
  );
};

/* Creating a styles object that contains two objects: logo and root. */
const styles = StyleSheet.create({
  logo: {
    /* Setting the maximum width and height of the image to 200. */
    maxWidth: 200,
    maxHeight: 200,
  },
  root: {
    /* Centering the image and adding padding to the view. */
    alignItems: 'center',
    padding: 20,
  }
});

export default SplashScreen;