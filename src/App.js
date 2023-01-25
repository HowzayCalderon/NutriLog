import './App.css';
import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './Screens/Home.jsx';
import History from './Screens/History.jsx'
import Today from './Screens/Today.jsx'
import UpdateItem from './Screens/UpdateItem.jsx';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/history' element={<History />} />
        <Route path='/today' element={<Today />} />
        <Route path='/items/:id' element={<UpdateItem />} />
      </Routes>
    </>
  );
}

export default App;
