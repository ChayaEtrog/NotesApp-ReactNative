import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import homeImg from '../../pictures/home.webp'

export default function NoteDetailsScreen({ route }) {
  const { note } = route.params;

  return (
    <ImageBackground
      source={homeImg} // ודא שהתמונה קיימת
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>{note.title}</Text>
        <ScrollView style={styles.scrollArea}>
          <Text style={styles.content}>{note.content}</Text>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
    padding: 24,
    borderRadius: 16,
    width: '90%',
    maxHeight: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
    textAlign: 'center',
  },
  scrollArea: {
    maxHeight: '80%', 
  },
  content: {
    fontSize: 20,
    color: '#555',
    lineHeight: 26,
  },
});