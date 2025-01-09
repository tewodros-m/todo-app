import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Task from './Task';
import AppText from '@/components/AppText'; // Optional, replace with any text component you use

type TaskType = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  isCompleted: boolean;
};

type TaskListProps = {
  tasks: TaskType[];
};

export default function TaskList({ tasks }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <AppText>No tasks available</AppText>
      </View>
    );
  }

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Task
          title={item.title}
          description={item.description}
          createdAt={item.createdAt}
          isCompleted={item.isCompleted}
          onEdit={() => console.log(`Edit task with id: ${item.id}`)}
          onDelete={() => console.log(`Delete task with id: ${item.id}`)}
          onToggle={() => console.log(`Toggle task with id: ${item.id}`)}
        />
      )}
      contentContainerStyle={styles.listContainer}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
    gap: 10, // Add spacing between items
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
