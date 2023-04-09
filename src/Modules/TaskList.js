import { useTasks } from '../TaskStore/TaskProvider';

export default function TaskList() {
  const tasks = useTasks();
  return (
    <div className="task-list">
      <h1>Task List</h1>
      {tasks.map((task) => (
        <ul key={task.id}>
          <li>{task.name}</li>
        </ul>
      ))}
    </div>
  );
}
