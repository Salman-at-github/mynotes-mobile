import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { noteStyles } from './NoteStyles';

const Note = ({ id, title, description, tag, onDelete, onEdit, isLargeScreen }) => {
  const [isPressed, setIsPressed] = useState(false)
  return (
    <TouchableOpacity style={[noteStyles.container, {width: isLargeScreen? "40%" : "100%"}, isPressed && noteStyles.pressed]} onPressIn={()=>{
      setIsPressed(true)
    }} onPressOut={()=>{setIsPressed(false)}}>
      <View style={noteStyles.header}>
        <Text style={noteStyles.title}>{title}</Text>
      </View>
      <Text style={noteStyles.description}>{description}</Text>
      <Text style={noteStyles.tag}>#{tag}</Text>
      <Text style={noteStyles.date}>Dec 10, 2024</Text>
      <View style={noteStyles.footer}>
        <TouchableOpacity style={{marginRight:10}} onPress={() => onDelete(id)}>
          <Ionicons name="trash-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onEdit(id)}>
          <Ionicons name="create-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Note;
