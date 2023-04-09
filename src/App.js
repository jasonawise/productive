import { Layout } from './components/layout';
import { TaskList } from './Modules';

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
