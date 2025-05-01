import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { getNotes, saveNotes } from '../storage/notesStorage';
import NoteItem from '../components/NoteItem';
import AddNoteModal from '../components/AddNoteModal';
import { FAB, Text } from 'react-native-paper';

export default function NotesScreen({ navigation }) {
  const [notes, setNotes] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    const storedNotes = await getNotes();
    setNotes(storedNotes || []);
  };

  const addNote = async (title, content) => {
    const newNote = { id: Date.now().toString(), title, content };
    const updatedNotes = [newNote, ...notes];
    setNotes(updatedNotes);
    await saveNotes(updatedNotes);
    setModalVisible(false);
  };

  const deleteNote = async (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    await saveNotes(updatedNotes);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NoteItem
            note={item}
            onDelete={() => deleteNote(item.id)}
            onPress={() => navigation.navigate('NoteDetails', { note: item })}
          />
        )}
      />
      <View style={styles.fabWrapper}>
        <FAB
          icon="plus"
          style={styles.fab}
          onPress={() => setModalVisible(true)}
          color="white"
          />
      </View>
      <AddNoteModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        onAdd={addNote}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'transparent',
  },
  fabWrapper: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  fab: {
    backgroundColor: '#00BCD4', 
    borderRadius: 28, 

  },

});