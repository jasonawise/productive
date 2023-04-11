import React from 'react';
import { Layout } from './components/layout';
import { TaskList } from './Modules/TaskList';
import TaskProvider from './TaskStore/TaskProvider';

const AddTask = React.lazy(() => import('./Modules/AddTask/AddTask'));
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
