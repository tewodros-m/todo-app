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
    marginRight: 10,
    height: '100%',
    borderWidth: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderColor: colors.primaryDark,
  },
  text: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    backgroundColor: colors.primaryMediumLight,
    color: colors.greyDark,
    padding: 10,
    fontSize: 16,
  },
});
