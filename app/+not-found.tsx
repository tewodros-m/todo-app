import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import colors from '@/config/colors';

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Text>Oops page not found! :)</Text>
      <Link href='/' style={styles.button}>
        Go Back to Home
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    color: 'white',
    borderRadius: 5,
    marginVertical: 10,
  },
});
