import React from 'react';
import './App.css';
import Register from './Register';
import Emptable from './Emptable';
import Empedit from './Empedit';
import {BrowserRouter,Route,Routes} from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
<Route path="/Empedit/:id" element={<Empedit/>}/>
<Route path="/table" element={<Emptable/>}/>
<Route path="/Register" element={<Register/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App