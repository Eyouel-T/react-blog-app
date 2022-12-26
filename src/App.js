import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Main from './main';
import Footer from './footer'
import React from 'react';
import Detail from './detail'
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import blogs from './blogs';


function App() {
  
  return (
    <div className="App">

        <Navbar/>

        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route  path={`/detail/`} element={<Detail/>}/>
          <Route  path={`/detail/:blogId`} element={<Detail/>}/>
        </Routes>

        <Footer/>

    </div>
  );
}

export default App;
