import { StyleSheet, Text, View, Alert } from 'react-native';
import React from 'react';
import CheckBox from './CheckBox';
import colors from '@/config/colors';
import IconButton from './IconButton';

export default function Task() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <CheckBox isChecked={true} onPress={() => {}} />
        <View>
          <Text style={styles.title}>Title</Text>
          <Text style={styles.subTitle}>Description about the task</Text>
        </View>
      </View>
      <Text>12/01/2025</Text>
      <View style={styles.buttonsContainer}>
        <IconButton
          iconType='Ionicons'
          iconName='trash-outline'
          color='white'
          style={styles.trashButton}
          onPress={() => {}}
        />
        <IconButton
          iconType='FontAwesome6'
          iconName='edit'
          color={colors.white}
          style={styles.editButton}
          onPress={() => {}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 80,
    backgroundColor: colors.primaryLight,
    borderRadius: 5,
    padding: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 16,
    color: colors.greyDark,
  },
  subTitle: {
    fontSize: 12,
    color: colors.greyDarkMedium,
  },

  trashButton: {
    backgroundColor: colors.red,
    borderRadius: 5,
    padding: 10,
  },
  editButton: {
    backgroundColor: colors.green,
    borderRadius: 5,
    padding: 10,
  },
});
