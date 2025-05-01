import React, { useState } from 'react';
import { Modal, View, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button as PaperButton, useTheme } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

export default function AddNoteModal({ visible, onClose, onAdd }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const theme = useTheme();

  const handleAdd = () => {
    if (title && content) {
      onAdd(title, content);
      setTitle('');
      setContent('');
    } else {
      Alert.alert('', 'Title and content are required');
    }
  };

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.modalContainer}>
        <Animatable.View animation="bounceIn" duration={600} style={styles.animatedView}>
          <View style={styles.modalContent}>
            <TextInput
              label="Title"
              value={title}
              onChangeText={setTitle}
              mode="outlined"
              style={styles.input}
            />
            <TextInput
              label="Content"
              value={content}
              onChangeText={setContent}
              mode="outlined"
              multiline
              numberOfLines={4}
              style={styles.input}
            />

            <View style={styles.buttonRow}>
              <PaperButton
                mode="contained"
                onPress={handleAdd}
                style={styles.addButton}
                labelStyle={{ color: 'white' }}
              >
                Add Note
              </PaperButton>

              <PaperButton
                mode="outlined"
                onPress={onClose}
                style={styles.cancelButton}
                textColor={'rgb(203, 230, 2)'}
              >
                Cancel
              </PaperButton>
            </View>
          </View>
        </Animatable.View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 16,
  },
  animatedView: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
  },
  modalContent: {
    padding: 20,
  },
  input: {
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addButton: {
    backgroundColor: 'rgb(255, 23, 131)',
    borderRadius: 30,
    flex: 1,
    marginRight: 8,
  },
  cancelButton: {
    borderColor: 'rgb(203, 230, 2)',
    borderWidth: 1.5,
    borderRadius: 30,
    flex: 1,
    marginLeft: 8,
  },
});