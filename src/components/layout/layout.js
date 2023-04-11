import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { FloatingButton } from '../floatingButton';
import { useTasks } from '../../TaskStore/TaskProvider';

export default function Layout({ children }) {
  const tasks = useTasks();
  return (
    <React.Suspense fallback="Loading...">
      <section className="p-4">{children}</section>
      {tasks.isAddingTask ? null : <FloatingButton>+</FloatingButton>}
    </React.Suspense>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
