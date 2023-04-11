import { Layout } from './components/layout';
import { TaskList } from './Modules/TaskList';
import TaskProvider from './TaskStore/TaskProvider';
import { AddTask } from './Modules/AddTask';

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <Layout>
          <TaskList />
          <AddTask />
        </Layout>
      </TaskProvider>
    </div>
  );
}

export default App;
