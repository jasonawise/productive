import PropTypes from 'prop-types';
import { useTasksDispatch } from '../../TaskStore/TaskProvider';

export default function FloatingButton({ children }) {
  const dispatch = useTasksDispatch();
  function handleClick() {
    dispatch({ type: 'TOGGLE_ADD_TASK', isAddingTask: true });
  }
  return (
    <div className="fixed bottom-0 right-0 m-4">
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={handleClick}
      >
        {children}
      </button>
    </div>
  );
}

FloatingButton.propTypes = {
  children: PropTypes.node.isRequired,
};
