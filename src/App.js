import './App.css';
import Welcome from './components/Welcome';
import Menu from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Menu />
      <Welcome />
      <About />
    </div>
  );
}

export default App;
