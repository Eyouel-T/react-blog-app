import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Main from './main';
import Footer from './footer'
import React from 'react';
import Detail from './detail'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">

        <Navbar/>

        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route exact path="/detail" element={<Detail/>}/>
        </Routes>

        <Footer/>

    </div>
  );
}

export default App;
