import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';
import colors from '@/config/colors';

type AppButtonProps = {
  children: string;
  onPress: () => void;
};

export default function AppButton({ children, onPress }: AppButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    height: '100%',
    textAlign: 'center',
    backgroundColor: colors.primaryMedium,
    color: colors.white,
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
});
