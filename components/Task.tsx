import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import CheckBox from './CheckBox';
import colors from '@/config/colors';
import IconButton from './IconButton';

type TaskProps = {
  title: string;
  description: string;
  createdAt: string;
  isCompleted: boolean;
  onEdit: () => void;
  onDelete: () => void;
  onToggle: () => void;
};

export default function Task({
  title,
  description,
  createdAt,
  isCompleted,
  onEdit,
  onDelete,
  onToggle,
}: TaskProps) {
  const screenWidth = Dimensions.get('window').width;

  // Truncate description if screen width is small
  const truncatedDescription =
    screenWidth <= 360 && description.length > 16
      ? `${description.slice(0, 20)}...`
      : description;

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <CheckBox isChecked={isCompleted} onPress={onToggle} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{truncatedDescription}</Text>
        </View>
      </View>
      <Text>{createdAt}</Text>
      <View style={styles.buttonsContainer}>
        <IconButton
          iconType='Ionicons'
          iconName='trash-outline'
          color='white'
          style={styles.trashButton}
          onPress={onDelete}
        />
        <IconButton
          iconType='FontAwesome6'
          iconName='edit'
          color={colors.white}
          style={styles.editButton}
          onPress={onEdit}
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
    overflow: 'hidden',
    width: '100%',
    height: 80,
    backgroundColor: colors.primaryLight,
    borderRadius: 5,
    padding: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
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
    padding: 5,
  },
  editButton: {
    backgroundColor: colors.green,
    borderRadius: 5,
    padding: 5,
  },
});
