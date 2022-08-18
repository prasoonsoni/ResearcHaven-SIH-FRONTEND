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
        <Buttons showLoginForm={props.showLoginForm} setShowRegForm={props.setShowRegForm} setShowLoginForm={props.setShowLoginForm} showRegForm={props.showRegForm} />
    </nav>
  );
}

export default Navbar