import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const RegistrationScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState(null);

  const handleRegistration = () => {
    // Perform registration logic here (e.g., API call)
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Avatar:', avatar);

    // Navigate to the next screen after successful registration
    navigation.navigate('Posts');
  };

  const pickImage = async () => {
    // Ask the user for permission to access the media library
    let result = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (result.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    // No permissions request is necessary for launching the image library
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResult.cancelled) {
      setAvatar(pickerResult.uri);
    }
  };

  return (
    <ImageBackground source={require('../assets/mountain.png')} style={styles.backgroundImage}>
      <View style={styles.avatarWrapper}>
        <TouchableOpacity style={styles.avatarContainer} onPress={pickImage}>
          {avatar ? (
            <Image source={{ uri: avatar }} style={styles.avatar} />
          ) : (
            <Text style={styles.avatarPlaceholder}>+</Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Registration</Text>

        <TextInput
          placeholder="Username"
          style={styles.input}
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          onChangeText={setPassword}
          value={password}
        />

        <TouchableOpacity style={styles.button} onPress={handleRegistration}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Already have an account? Sign in</Text>
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
  avatarWrapper: {
    position: 'absolute',
    top: '44%', // Adjust this value as needed
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',

    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  avatarPlaceholder: {
  borderRadius: 50,
    fontSize: 48,
    color: '#FF6C00',
  },
  container: {
    position: 'absolute',
    height: '50%',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: 'hidden',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    marginTop: 60, // added margin to avoid overlap with avatar
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#FF6C00',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 100,
    alignItems: 'center',
    width: '100%',
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

export default RegistrationScreen;
