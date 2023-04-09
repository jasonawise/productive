import React from 'react';
import PropTypes from 'prop-types';
import TaskReducer from './TaskReducer';
import { TaskContext, TaskDispatchContext } from './TaskContext';

export default function TaskProvider({ children }) {
  const [tasks, dispatch] = React.useReducer(TaskReducer, initialState);

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return React.useContext(TaskContext);
}

export function useTasksDispatch() {
  return React.useContext(TaskDispatchContext);
}

export const initialState = [
  {
    id: 1,
    name: 'Task 1',
    completed: false,
  },
];

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
