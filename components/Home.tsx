import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { addTask, toggleTask, deleteTask } from '../redux/tasksSlice';
import { loadTasks, saveTasks } from '../redux/tasksSlice';
import AddTask from '@/components/AddTask';
import TaskList from '@/components/TaskList';
import FilterButtons from '@/components/FilterButtons';

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tasks, loading } = useSelector((state: RootState) => state.tasks);

  useEffect(() => {
    // Load tasks on app start
    dispatch(loadTasks());
  }, [dispatch]);

  useEffect(() => {
    // Save tasks whenever they change
    if (!loading) {
      dispatch(saveTasks(tasks));
    }
  }, [tasks, loading, dispatch]);

  const handleAddTask = (taskText: string) => {
    dispatch(addTask(taskText));
  };

  const handleToggleTask = (taskId: number) => {
    dispatch(toggleTask(taskId));
  };

  const handleDeleteTask = (taskId: number) => {
    dispatch(deleteTask(taskId));
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color='#0000ff' />
        <Text>Loading tasks...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <AddTask onAddTask={handleAddTask} />
      <FilterButtons
        currentFilter='All'
        onFilterChange={() => {} /* Filtering can be added later */}
      />
      <TaskList
        tasks={tasks}
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
