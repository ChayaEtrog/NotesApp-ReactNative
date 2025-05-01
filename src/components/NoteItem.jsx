import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text, IconButton } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function NoteItem({ note, onDelete, onPress }) {
  return (
    <Animatable.View animation="fadeInUp" duration={500} style={styles.wrapper}>
      <Card mode="outlined" style={styles.card} onPress={onPress}>
        <Card.Title
          title={note.title}
          titleStyle={styles.title}
          right={() => (
            <TouchableOpacity onPress={onDelete} style={styles.button}>
              <Icon name="delete-outline" size={24} color="rgb(203, 230, 2)" />
            </TouchableOpacity>
          )}
        />
        <Card.Content>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.noteContent}
          >
            {note.content}
          </Text>
        </Card.Content>
      </Card>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 12,
  },
  card: {
    borderColor: 'rgb(255, 23, 131)',
    borderWidth: 0.2,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  },
  noteContent: {
    fontSize: 16,
    color: 'rgb(100, 99, 99)',
  },
  button: {
    paddingRight: 15,
  },
});