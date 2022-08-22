import React from "react";
import "./NavLinks.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {HStack} from '@chakra-ui/react'
// import { VscChromeClose } from "react-icons/vsc";
// import { AiOutlineMenu } from "react-icons/ai";
// import { Show, Box } from "@chakra-ui/react";

function NavLinks() {
  // for changing navlinks visibility
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const token = sessionStorage.getItem('token');
  const location = useLocation();
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
  }, []);
  return (
    <HStack  display={{ base: "none", md: "flex" }}>
    <div className="nav-container">
      {(!token && screenWidth > 1040 && location.pathname!=='/dashboard') && (
        <ul className="nav-ul">
          <li className="list-item">
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="list-item">
            <Link to="/about">
              About
            </Link>
          </li>
          <li className="list-item">
            <Link to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
    </HStack>
  );
}

export default NavLinks;
