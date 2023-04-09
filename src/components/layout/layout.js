// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import TaskProvider from '../../TaskStore/TaskProvider';

export default function Layout({ children }) {
  return (
    <TaskProvider>
      <section className="p-4">{children}</section>
    </TaskProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
