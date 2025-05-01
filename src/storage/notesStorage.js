import AsyncStorage from '@react-native-async-storage/async-storage';

const NOTES_KEY = 'NOTES';

export const getNotes = async () => {
  try {
    const notes = await AsyncStorage.getItem(NOTES_KEY);
    return notes ? JSON.parse(notes) : [];
  } catch (error) {
    console.error('Error loading notes', error);
    return [];
  }
};

export const saveNotes = async (notes) => {
  try {
    await AsyncStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  } catch (error) {
    console.error('Error saving notes', error);
  }
};
