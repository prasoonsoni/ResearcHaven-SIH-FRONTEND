import React from 'react';
import './Navbar.css';
import NavLinks from './NavLinks';
import Buttons from './Buttons';
import WebCrawlers from './WebCrawlers';
function Navbar(props) {
  return (
    <nav  id="nav">
        <WebCrawlers/>
        <NavLinks/>
        <Buttons/>
    </nav>
  );
}

export default Navbar