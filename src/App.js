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
import handleSubmit from './handles/handlesubmit';
import { useRef } from 'react';
import Add from './add';


function App() {
//   const dataRef = useRef()
//  
//   const submithandler = (e) => {
//     e.preventDefault()
//     handleSubmit(dataRef.current.value)
//     dataRef.current.value = ""
//   }
  return (
    <div className="App">

        <Navbar/>

        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route  path={`/detail/`} element={<Detail/>}/>
          <Route  path={`/detail/:blogId`} element={<Detail/>}/>
          <Route  exact path={`/add/`} element={<Add/>}/>
        </Routes>
        {/* <form onSubmit={submithandler}>
        <input type= "text" ref={dataRef} />
        <button type = "submit">Save</button>
      </form> */}
        <Footer/>

    </div>
  );
}

export default App;
