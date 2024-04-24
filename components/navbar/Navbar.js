import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { navbarStyles } from './NavbarStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { bgStyles } from '../../shared/BgStyles';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(prevState => !prevState);
  };

  const handleLogout = () => {
    // Implement logout functionality here
    console.log('Logged out');
  };

  return (
    <View>
      <LinearGradient
        colors={['#000', "#060030","#000"]}
        style={bgStyles.linGrad} start={{ x: 0.01, y:0.01}} end={{x:1, y:1}}
      />
      <View style={navbarStyles.container}>
        <TouchableOpacity onPress={toggleDrawer}>
          <Ionicons name={isDrawerOpen ? 'close' : 'menu'} size={24} color="white" />
        </TouchableOpacity>
        <Text style={navbarStyles.title}>My App</Text>
        {isDrawerOpen && (
          <View style={navbarStyles.drawer}>
            <TouchableOpacity style={navbarStyles.drawerItem} onPress={handleLogout}>
              <Ionicons name="log-out-outline" size={24} color="black" />
              <Text style={navbarStyles.drawerText}>Logout</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Navbar;
