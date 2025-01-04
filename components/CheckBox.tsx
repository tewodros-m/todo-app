import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '@/config/colors';

type CheckBoxProps = {
  isChecked: boolean;
  onPress?: () => void;
};

export default function CheckBox({
  isChecked = false,
  onPress,
}: CheckBoxProps) {
  const [checked, setChecked] = useState(isChecked);

  const toggleCheckBox = () => {
    setChecked(!checked);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && (
          <Ionicons name='checkmark' size={16} color={colors.white} />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkbox: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: colors.primaryMedium,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  checked: {
    backgroundColor: colors.primaryMedium,
  },
});
