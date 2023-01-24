import './App.css';
import React from 'react'
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/history' element={<History />} />
        <Route path='/today' element={<Today />} />
      </Routes>
    </div>
  );
}

export default App;
