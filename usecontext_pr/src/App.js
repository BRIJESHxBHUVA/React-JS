import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Context from './Context';

function App() {
  return (
   <>
    <Context>
    <Navbar/>
    <Home/>
    <About/>
    </Context>
   </>
  );
}

export default App;
