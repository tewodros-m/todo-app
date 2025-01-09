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
  style: Object;
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
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  input: {
    fontSize: 16,
    height: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlignVertical: 'center',
    ...(Platform.OS === 'web' && {
      outlineWidth: 0,
      boxSizing: 'border-box',
    }),
  },
  icon: {
    marginRight: 10,
    alignSelf: 'center',
  },
});

export default AppTextInput;

// export default function AppTextInput({ label, style }: AppTextInputProps) {
//   const [task, setTask] = useState('');

//   return (
//     <View style={[styles.container, style]}>
//       <TextInput
//         placeholder={label}
//         value={task}
//         onChangeText={setTask}
//         style={styles.input}
//         placeholderTextColor={colors.greyMedium}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
// container: {
//   flex: 1,
//   height: '100%',
//   borderBottomColor: colors.greyMedium,
//   borderBottomWidth: 1,
//   borderRightWidth: 0,
//   justifyContent: 'center',
//   alignItems: 'flex-start',
// },
// input: {
//   fontSize: 16,
//   paddingHorizontal: 10,
//   paddingVertical: 5,
//   textAlignVertical: 'center',
//   ...(Platform.OS === 'web' && {
//     outlineWidth: 0,
//     boxSizing: 'border-box',
//   }),
// },
// });
