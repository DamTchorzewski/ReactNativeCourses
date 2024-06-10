import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    console.log('Login with email:', email, 'and password:', password);
  };

  return (

    <ImageBackground source={require('../assets/mountain.png')} style={styles.backgroundImage}>

      <View style={styles.container}>
        <Text style={styles.title}>Sing in</Text>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Posts')}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.linkText}>Don't have an account? Register now</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
     flex: 1,
     resizeMode: 'cover',

   },
  container: {
    position: 'absolute', // add this
    height:  '50%' ,
    bottom: 0, // add this
    left: 0, // add this
    right: 0, // add this
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: 'hidden',
  },


  title: {
   fontSize: 24,
       marginBottom: 16,
       textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#FF6C00',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 16,
    alignItems: 'center',
  },
  linkText: {
    color: '#1B4371',
    fontSize: 14,
  },
});

export default LoginScreen;
