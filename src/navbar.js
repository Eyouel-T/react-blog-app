import searchLogo from "./images/search-icon2.png";
import signout from "./images/sign-out-icon.jpg";
import React from 'react';
import { Link, useNavigate  } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

export default function Navbar(props){
  const navigate = useNavigate()
  function signoutClick(){
    signOut(auth)
    console.log("user is signed out bruuuh")
    navigate(0)// reload the page
    
  }
    return(
        <div className="nav-bar">
          <ul className='nav-bar-ul'>
            <li><Link to={`/`}>Home</Link></li>
            <li><a href='#'>about</a></li>
            <li><Link to={`/add/`}>write</Link></li>
            
            <li><a href='#'>contact</a></li>
          </ul>
          <div className='search-bar'>
            <img alt="search"src={searchLogo}/>
            {/* <input type="text"></input> */}
            {props.user?<> <p>{props.user.displayName}</p><img src={signout} onClick={signoutClick}/></>: <Link to={`/login`}>Login</Link>}
          </div>
        </div>
        
    );
}