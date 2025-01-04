import { TextInput, Platform, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import colors from '@/config/colors';

type AppTextInputProps = {
  label: string;
  style?: Object;
};

export default function AppTextInput({ label, style }: AppTextInputProps) {
  const [task, setTask] = useState('');

  return (
    <TextInput
      placeholder={label}
      value={task}
      onChangeText={setTask}
      style={[styles.input, style]}
      placeholderTextColor={colors.greyMedium}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: '100%',
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlignVertical: 'center',
    ...(Platform.OS === 'web' && {
      outlineWidth: 0,
      boxSizing: 'border-box',
    }),

    borderBottomColor: colors.greyMedium,
    borderBottomWidth: 1,
  },
});
