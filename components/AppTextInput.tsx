import {
  TextInput,
  StyleSheet,
  View,
  TextInputProps,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import defaultStyles from '@/config/styles';

interface AppTextInputProps extends TextInputProps {
  icon?: string;
  style?: Object;
}

function AppTextInput({ icon, style, ...otherProps }: AppTextInputProps) {
  return (
    <View style={styles.container}>
      {icon && (
        <Ionicons
          name={icon as any}
          size={25}
          color={defaultStyles.colors.grey}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.grey}
        style={[defaultStyles.text, styles.input, style]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 10,
    width: '100%',
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
    borderWidth: 1,
    borderColor: defaultStyles.colors.grey,
    borderRadius: 5,
    height: 40,
    width: '100%',
    flex: 1,
  },
  icon: {
    marginRight: 10,
    alignSelf: 'center',
  },
});

export default AppTextInput;
