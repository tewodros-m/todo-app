import { TextInput, Platform, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import colors from '@/config/colors';

type AppTextInputProps = {
  label: string;
  style?: Object;
};

export default function AppTextInput({ label, style }: AppTextInputProps) {
  const [task, setTask] = useState('');

  return (
    <View style={[styles.container, style]}>
      <TextInput
        placeholder={label}
        value={task}
        onChangeText={setTask}
        style={styles.input}
        placeholderTextColor={colors.greyMedium}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    borderBottomColor: colors.greyMedium,
    borderBottomWidth: 1,
    borderRightWidth: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  input: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlignVertical: 'center',
    ...(Platform.OS === 'web' && {
      outlineWidth: 0,
      boxSizing: 'border-box',
    }),
  },
});
