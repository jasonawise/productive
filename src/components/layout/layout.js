// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import TaskProvider from '../../TaskStore/TaskProvider';
import { FloatingButton } from '../floatingButton';

export default function Layout({ children }) {
  return (
    <TaskProvider>
      <section className="p-4">{children}</section>
      <FloatingButton>+</FloatingButton>
    </TaskProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
