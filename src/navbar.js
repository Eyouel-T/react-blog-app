import searchLogo from "./images/search-icon2.png";
import React from 'react';
export default function Navbar(){
    return(
        <div className="nav-bar">
          <ul className='nav-bar-ul'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>about</a></li>
            <li><a href='#'>blog</a></li>
            <li><a href='#'>contact</a></li>
          </ul>
          <div className='search-bar'>
            <img alt="search"src={searchLogo}/>
            <input type="text"></input>
          </div>
        </div>
        
    );
}