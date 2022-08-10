import { Text, StyleSheet, View, Image, } from 'react-native';
import React, {useState} from 'react';
import Logo from '../../assets/img/FoodieLogoBlack.png';
import CustomInput from '../components/CustomInput';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.text}>Full Name</Text>
      <CustomInput
        placeholder="Full Name"
        value=""
        setValue="setUsername"
      />
      <CustomInput
        placeholder="Email Address"
        value=""
        setValue="setEmail"
      />
      <CustomInput
        placeholder="Password"
        value=""
        setValue="setPassword"
      />
    </View>
  );
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
  text: {
    /* Aligning the text to the left. */
    alignItems: 'flex-start',
    color: '#FFFFFF'
  },
});

export default SignUp;