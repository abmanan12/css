import { useState } from 'react';
import './App.css';

function App() {

  const [showLinks, setShowLinks] = useState(false);

  const handleToggle = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="App">

      <nav className="navbar">
        <div className="nav-btn">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="toggle-btn" onClick={handleToggle}>
            ☰
          </button>
        </div>

        <ul className={`nav-links ${showLinks ? 'active' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

    </div>
  );
}

export default App;
