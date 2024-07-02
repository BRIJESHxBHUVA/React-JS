import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './Login';
import SignIn from './SignIn';

function App() {
  return (
   <>
   
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} /> 
        <Route path='login with email' element={<SignIn/>} />
      </Routes>
   </Router>
   </>
  );
}

export default App;
