import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import TaskList from '@/components/TaskList';
import { mockTasks } from '@/data';
import defaultStyles from '@/config/styles';
import AppTextInput from '@/components/AppTextInput';
import { Ionicons } from '@expo/vector-icons';

export default function TasksScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <AppTextInput
          placeholder='title'
          autoCapitalize='none'
          autoCorrect={false}
        />
        <AppTextInput placeholder='description' />
      </View>
      <TaskList tasks={mockTasks} />
      <TouchableOpacity style={styles.fab} onPress={() => {}}>
        <Ionicons name='add' size={24} color={defaultStyles.colors.white} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginHorizontal: 5,
    backgroundColor: defaultStyles.colors.white,
  },
  inputContainer: {},
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: defaultStyles.colors.primaryMedium,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
