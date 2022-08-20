import React from "react";
import "./NavLinks.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import { VscChromeClose } from "react-icons/vsc";
// import { AiOutlineMenu } from "react-icons/ai";
// import { Show, Box } from "@chakra-ui/react";

function NavLinks() {
  // for changing navlinks visibility
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isOpen, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
  }, []);

  return (
    <div className="nav-container">
      {(isOpen || screenWidth > 1040) && (
        <ul className={isOpen ? "nav-ul" : "nav-ul responsive"}>
          <li className="list-item">
            <Link to="/" onClick={toggleNav}>
              Home
            </Link>
          </li>
          <li className="list-item">
            <Link to="/about" onClick={toggleNav}>
              About
            </Link>
          </li>
          <li className="list-item">
            <Link to="/contact" onClick={toggleNav}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default NavLinks;
