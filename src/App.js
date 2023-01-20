import './App.css';
import Background from './Components/Background';
import Layout from './Components/Layout';
import TopBar from './Components/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <Layout />
    </div>
  );
}

export default App;
