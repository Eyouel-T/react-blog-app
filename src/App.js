import logo from './logo.svg';
import './App.css';
import searchLogo from "./Images/search-icon2.png";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
