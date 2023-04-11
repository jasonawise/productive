import { useTasks } from '../../TaskStore/TaskProvider';

export default function AddTask() {
  const tasks = useTasks();

  if (!tasks.isAddingTask) return null;

  return (
    <div className="border border-gray-200 rounded-md p-4 shadow bg-gray-50">
      <h1>Add Task</h1>
      <p>adding tasks...</p>
    </div>
  );
}
