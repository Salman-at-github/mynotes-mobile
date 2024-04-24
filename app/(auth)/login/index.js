import React, { useState } from 'react';
import { Link } from 'expo-router';
import { Pressable, Text, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { loginStyles } from './LoginStyles'; // Importing styles from the separate file
import { bgStyles } from '../../../shared/BgStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { commonStyles } from '../../../shared/CommonStyles';
import { textStyles } from '../../../shared/TextStyles';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log("Logging in with email:", email, "and password:", password);
    // Your login logic goes here
  };
  
  return (
    <View style={loginStyles.container}>
      <LinearGradient
        colors={["#000", "#060030", "#000"]}
        style={bgStyles.linGrad}
      />
      <Text style={textStyles.whiteTitle}>Login</Text>
      <TextInput
        style={commonStyles.input}
        placeholder="Email"
        placeholderTextColor="gray"
        value={email}
        onChangeText={setEmail}
      />
      <View style={loginStyles.passwordContainer}>
        <TextInput
          style={[commonStyles.input, loginStyles.passwordInput]}
          placeholder="Password"
          placeholderTextColor="gray"

          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <Pressable onPress={() => setShowPassword(!showPassword)} style={loginStyles.eyeIcon}>
          <Feather name={showPassword ? 'eye-off' : 'eye'} size={24} color="gray" />
        </Pressable>
      </View>
      <Pressable style={commonStyles.button} onPress={handleLogin}>
        <Text style={commonStyles.buttonText}>Login</Text>
      </Pressable>
      <Link href="/signup" asChild>
        <Text style={loginStyles.link}>Don't have an account? Sign Up</Text>
      </Link>
      <Link href="/" asChild>
        <Text style={loginStyles.link}>Go Home</Text>
      </Link>
    </View>
  );
}
