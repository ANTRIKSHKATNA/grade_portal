import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import { Route, Routes } from 'react-router-dom';
import CardDetails from './components/CardDetails'; 
const App = () => {
  return (
    <div >
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/card/:id" element={<CardDetails />} />       </Routes>
    </div>
  );
};
export default App;
