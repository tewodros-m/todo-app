import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';
import colors from '@/config/colors';

type AppButtonProps = {
  title: string;
  onPress: () => void;
  color: string;
};

export default function AppButton({
  title,
  onPress,
  color = colors.primaryMediumLight,
}: AppButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: '100%',
    borderWidth: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderColor: colors.primaryDark,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryMediumLight,
  },
  text: {
    padding: 5,
    height: '100%',
    textAlignVertical: 'center',
    color: colors.greyDark,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
