import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import AddTask from '@/components/AddTask';
import TaskList from '@/components/TaskList';
import FilterButtons from '@/components/FilterButtons';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<string>('All');

  const handleAddTask = (newTaskText: string) => {
    const newTask: Task = {
      id: Date.now(),
      text: newTaskText,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleToggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Completed') return task.completed;
    if (filter === 'Pending') return !task.completed;
    return true; // All
  });

  return (
    <View style={styles.container}>
      <AddTask onAddTask={handleAddTask} />
      <FilterButtons
        currentFilter={filter}
        onFilterChange={handleFilterChange}
      />
      <TaskList
        tasks={filteredTasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default Home;
