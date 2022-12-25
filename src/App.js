import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Main from './main';
import Footer from './footer'
import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/test" element={<Main/>}/>
        
        </Routes>
        <Navbar/>
        <Footer/>
    </div>
  );
}

export default App;
