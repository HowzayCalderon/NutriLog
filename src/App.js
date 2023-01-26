import './App.css';
import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from '../src/Screens/Home/Home.jsx';
import History from './Screens/History/History.jsx'
import Today from './Screens/Today/Today.jsx'
import UpdateItem from './Screens/UpdateItem/UpdateItem.jsx';


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
