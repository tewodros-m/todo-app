import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '@/config/colors';

type AppTextProps = {
  children: string;
};

export default function AppText({ children }: AppTextProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    color: colors.greyDark,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
