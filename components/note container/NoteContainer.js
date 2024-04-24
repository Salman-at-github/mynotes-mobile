import React from 'react';
import { View, Dimensions, StyleSheet, ScrollView } from 'react-native';
import Note from '../note/Note';

const { width } = Dimensions.get('window');
const isLargeScreen = width >= 600;

const NoteContainer = ({ notes, onDelete, onEdit }) => {
    
  return (
    <ScrollView  contentContainerStyle={styles.container}>
      {notes.map(note => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          description={note.description}
          tag={note.tag}
          onDelete={onDelete}
          onEdit={onEdit}
          isLargeScreen={isLargeScreen}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {

    display:"flex",
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems:'center',
    flexWrap:'wrap',
    paddingHorizontal:30,
    gap:10
  },
});

export default NoteContainer;
