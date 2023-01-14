import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Blog from './Components/Blog';
import Add from './Components/Add';


class App extends Component {
  render() {
    return (
    <BrowserRouter>
    <Routes>
      <Route path='/'exact element={<Blog/>}/>
      <Route path='/add' exact element={<Add/>}/>
    </Routes>
    </BrowserRouter>
    );
  }
}
export default App;
