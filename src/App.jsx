// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// import Projects from './Projects';
// import Contact from './Contact';
// import './App.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';


// export default function App() {
//   return (
//     <Router>
//       <div className="app">
//         <nav className="navbar">
//           <ul>
//             <li>
//               <NavLink to="/" exact activeClassName="active">
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/about" activeClassName="active">
//                 About
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/projects" activeClassName="active">
//                 Projects
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact" activeClassName="active">
//                 Contact
//               </NavLink>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="hamburger" onClick={toggleMenu}>
            <div id='bar'></div>
            <div id='bar'></div>
            <div id='bar'></div>
          </div>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <NavLink to="/" exact="true" activeClassName="active" onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active" onClick={toggleMenu}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeClassName="active" onClick={toggleMenu}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active" onClick={toggleMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

