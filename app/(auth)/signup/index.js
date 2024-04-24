import React, { useState } from 'react';
import { Link } from 'expo-router';
import { Pressable, Text, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { signupStyles } from './SignupStyles';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = () => {
    console.log("Signing up with name:", name, "email:", email, "and password:", password);
    // Your signup logic goes here
  };

  return (
    <View style={signupStyles.container}>
      <Text style={signupStyles.title}>Sign Up</Text>
      <TextInput
        style={signupStyles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={signupStyles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <View style={signupStyles.passwordContainer}>
        <TextInput
          style={[signupStyles.input, signupStyles.passwordInput]}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <Pressable onPress={() => setShowPassword(!showPassword)} style={signupStyles.eyeIcon}>
          <Feather name={showPassword ? 'eye-off' : 'eye'} size={24} color="black" />
        </Pressable>
      </View>
      <View style={signupStyles.passwordContainer}>
        <TextInput
          style={[signupStyles.input, signupStyles.passwordInput]}
          placeholder="Confirm Password"
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <Pressable onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={signupStyles.eyeIcon}>
          <Feather name={showConfirmPassword ? 'eye-off' : 'eye'} size={24} color="black" />
        </Pressable>
      </View>
      <Pressable style={signupStyles.button} onPress={handleSignup}>
        <Text style={signupStyles.buttonText}>Sign Up</Text>
      </Pressable>
      <Link href="/login" asChild>
        <Text style={signupStyles.link}>Already have an account? Login</Text>
      </Link>
    </View>
  );
}
