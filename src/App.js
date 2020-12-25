import './App.css';
import Dashboard from "./components/Dashboard"
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Dashboard/>
    </div>
  );
}

export default App;
