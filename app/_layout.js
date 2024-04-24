import { Slot } from "expo-router";
import Navbar from "../components/navbar/Navbar";
import { View } from "react-native";
import { StatusBar } from 'expo-status-bar';


export default function HomeLayout() {
  return (
    <View style={{height:"100%"}}>
      <StatusBar style="auto" hidden/>
    <Navbar/>
      <Slot />
    </View>
  );
}
