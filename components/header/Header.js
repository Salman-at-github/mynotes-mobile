import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Pressable, TextInput } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useNoteContext } from '../../context/notes/noteContext'
import { FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { headerStyles } from './HeaderStyles';
import { Link } from 'expo-router';

const Header = () => {
  const { searchKeyword, setSearchKeyword, setSearchTriggered, setSearchResults, setNotes, buttonLoading, setButtonLoading, setQuery} = useNoteContext();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(prevOption => !prevOption);
  };

  useEffect(() => {
    setShowMenu(false);
    if (AsyncStorage.getItem('token')) {
      navigateTo("/");
    }
  }, [path]);

  const handleSearchFieldDataChange = (value) => {
    setSearchKeyword(value);
  };

  const handleSearch = async () => {
    if (searchKeyword) {
      setNotes([]);
      try {
        setButtonLoading(true);
        setQuery(searchKeyword);
        const data = await searchNotes(1, 8, searchKeyword);
        setSearchTriggered(true);
        setButtonLoading(false);
        setNotes(data?.notes);
        setSearchResults(data?.totalResults);

      } catch (error) {
        throw error;
      }
    }
  };

  const handleLogout = () => {
    AsyncStorage.removeItem('token');
    navigateTo('/signin');
  };

  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.mainLogo}>
        <Link to="/signin">
          <Text style={headerStyles.logoText}>My</Text>
          <Text style={headerStyles.logoTextNotes}>Notes</Text>
        </Link>
      </View>
      <Ionicons name="ios-menu" style={headerStyles.menuIcon} onPress={toggleMenu} />
      <View style={[headerStyles.dropdown, showMenu ? {} : { display: 'none' }]}>
        <AntDesign name="close" style={headerStyles.closeButton} onPress={toggleMenu} />
        <View style={headerStyles.searchBar}>
          <TextInput
            style={headerStyles.searchInput}
            placeholder="Search..."
            value={searchKeyword}
            onChangeText={handleSearchFieldDataChange}
            editable={!!AsyncStorage.getItem('token')}
          />
          <Pressable style={headerStyles.searchButton} onPress={handleSearch} disabled={!AsyncStorage.getItem('token')}>
            {buttonLoading ? <MaterialCommunityIcons name="loading" style={headerStyles.searchIcon} /> : <Text style={headerStyles.searchButtonText}>Search</Text>}
          </Pressable>
        </View>
        {AsyncStorage.getItem('token') ?
          <Pressable onPress={handleLogout}>
            <Text style={headerStyles.logoutText}><MaterialIcons name="logout" /> Logout</Text>
          </Pressable> :
          <Link to="/signin">
            <Text style={headerStyles.logoutText}>(Please Login)</Text>
          </Link>
        }
        <View style={headerStyles.followMe}>
          <Text style={{ color: 'white' }}>Follow Me <FontAwesome5 name="hand-point-down" size={16} color="white" /></Text>
          <View style={headerStyles.socialIcons}>
            <FontAwesome name="github" style={headerStyles.socialIcon} onPress={() => { }} />
            <FontAwesome name="linkedin" style={headerStyles.socialIcon} onPress={() => { }} />
            <FontAwesome name="facebook" style={headerStyles.socialIcon} onPress={() => { }} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
