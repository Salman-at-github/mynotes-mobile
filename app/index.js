import React, { useState } from "react";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons"; // Importing Feather icons from react-native-vector-icons
import { textStyles } from "../shared/TextStyles";
import { LinearGradient } from "expo-linear-gradient";
import { bgStyles } from "../shared/BgStyles";
import Note from "../components/note/Note";
import NoteContainer from "../components/note container/NoteContainer";

export default function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const notes = [
  {
    id: 1,
    title: "Note 1",
    description: "Description for note 1",
    tag: "Personal",
  },
  {
    id: 2,
    title: "Note 2",
    description: "Description for note 2",
    tag: "Work",
  },
  {
    id: 3,
    title: "Note 3",
    description: "Description for note 3",
    tag: "Study",
  },
  {
    id: 4,
    title: "Note 4",
    description: "Description for note 4",
    tag: "Personal",
  },
  {
    id: 5,
    title: "Note 5",
    description: "Description for note 5",
    tag: "Work",
  },
];

  const handleLogin = () => {
    // Replace this with your actual login function
    console.log(
      "Logging in with username:",
      username,
      "and password:",
      password
    );
    // Your login logic goes here
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#000", "#060030", "#000"]}
        style={bgStyles.linGrad}
      />
        <Text style={textStyles.whiteTitle}>Home</Text>
        <NoteContainer notes={notes}/>
        <Link href="/login" asChild>
          <Text style={textStyles.link}>Login Page</Text>
        </Link>
        <Link href="/signup" asChild>
          <Text style={textStyles.link}>Signup</Text>
        </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // color:"white"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
  },
  button: {
    width: "80%",
    height: 40,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  link: {
    marginTop: 20,
    color: "blue",
    textDecorationLine: "underline",
  },
});
