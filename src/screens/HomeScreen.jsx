import React from 'react';
import homeImg from '../../pictures/home.webp'
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Text, Button, Card, useTheme } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

export default function HomeScreen({ navigation }) {
  const theme = useTheme();

  return (
    <ImageBackground source={homeImg} style={styles.background}>
      <View style={styles.overlay}>
        <Animatable.View animation="fadeInDown" duration={1000}>
          <Card style={styles.card} elevation={5}>
            <Card.Content style={{ alignItems: 'center' }}>
              <Text variant="headlineMedium" style={styles.title}>
                Welcome to the Notes App!
              </Text>
              <Button
                mode="contained"
                onPress={() => navigation.navigate('Notes')}
                style={styles.button}
                icon="note-outline"
              >
                My Notes
              </Button>
            </Card.Content>
          </Card>
        </Animatable.View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(252, 244, 244, 0.88)',
  },
  title: {
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  button: {
    marginTop: 20,
    width: 200,
    backgroundColor:'rgb(203, 230, 2)'
  },
});
