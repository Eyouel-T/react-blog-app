import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Main from './main';
import Footer from './footer'
import React, { useState } from 'react';
import Detail from './detail'
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import blogs from './blogs';
import handleSubmit from './handles/handlesubmit';
import { useRef } from 'react';
import Add from './add';
import Login from './login';
import Test from './test';
import { auth } from './firebase';
 
function App() {
  const [loggedInUser, setLoggedInUser] = useState()
  auth.onAuthStateChanged(user=>{
    if (user) {
      // User is signed in.
      // console.log(user.displayName)
      // console.log("user is signed in")
      setLoggedInUser(user)
    } else {
      // No user is signed in.
      console.log("user is not signed in")
    }
  });
  return (
    <div className="App">

        <Navbar user={loggedInUser}/>

        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route  path={`/login/`} element={<Login/>}/>
          <Route  path={`/detail/`} element={<Detail user={loggedInUser}/>}/>
          <Route  path={`/detail/:blogId`} element={<Detail user={loggedInUser}/>}/>
          <Route  exact path={`/add/`} element={loggedInUser&&<Add/>}/>
          <Route  exact path={`/test/`} element={<Test/>}/>

        
        </Routes>
        
        <Footer/>

    </div>
  );
}

export default App;
