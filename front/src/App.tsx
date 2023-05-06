import React from 'react';
import './App.css';
import Home from './pages/Home';
import WebHosting from './pages/WebHosting';
import DBServer from './pages/DBServer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/webhosting' element={<WebHosting/>}></Route>
          <Route path='/dbserver' element={<DBServer/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
