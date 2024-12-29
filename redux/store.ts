import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('tasks', JSON.stringify(state.tasks.tasks));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
