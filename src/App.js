import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Favorite from './pages/Favorite';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorite" element={<Favorite/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;