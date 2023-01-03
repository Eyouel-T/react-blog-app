import searchLogo from "./images/search-icon2.png";
import React from 'react';
import { Link } from "react-router-dom";
export default function Navbar(){
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
            <input type="text"></input>
          </div>
        </div>
        
    );
}