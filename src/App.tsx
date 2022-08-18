import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GamesPage from './features/games/GamesPage';

function App() {
  return (
   <BrowserRouter>
   <Routes>
      <Route path ="/"  element={<GamesPage/>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
