import { Layout } from './components/layout';
import { TaskList } from './Modules/TaskList';

function App() {
  return (
    <div className="App">
      <Layout>
        <TaskList />
      </Layout>
    </div>
  );
}

export default App;
