import './App.css';
import Apidata from './Apidata';
import Uploaded from './Uploaded';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [apiData, setApiData] = useState([])

  return (
  <>
  <Router>
    <Routes>
      <Route path='/' element={<Apidata apiData={apiData} setApiData={setApiData} />}/>
      <Route path='/uploadedproducts' element={<Uploaded apiData={apiData} setApiData={setApiData} />}/>
    </Routes>
  </Router>
   
    

  </>
  );
}

export default App;
