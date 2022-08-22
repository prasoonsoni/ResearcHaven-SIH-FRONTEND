import React from 'react';
import './Navbar.css';
import Buttons from './Buttons';
import WebCrawlers from './WebCrawlers';
function Navbar(props) {

  return (
    <nav id="nav">
      <WebCrawlers />
      <Buttons />
    </nav>
  );
}

export default Navbar