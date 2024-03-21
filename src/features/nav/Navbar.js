import React from "react";
import "./Navbar.css";
import { FaSearch,FaShoppingCart ,FaRegUser  } from "react-icons/fa";
function Navbar({ children }) {
  return (
    <>
      <div className="nav-container container">
        <div>
          <img
          alt="logo"
            className="nav-logo"
            src="https://hairsncares.com/assets/img/logo.png"
          />
        </div>
        <div className="nav-link">
          <a>HOME</a>
          <a>WHO WE ARE</a>
          <a>OUR EXPERTISE</a>
          <a>PRODUCT</a>
          <a>CONTECT US</a>
        </div>
        <div className="nav-right">
          <button
            className="btn-test"
          >
            TAKE HAIR TEST
          </button>
         <div className="nav-icons">
         <FaSearch size={20} />
         <FaShoppingCart size={20} />
         <FaRegUser size={20}/>
         </div>
        </div>
      </div>
      {children}
    </>
  );
}

export default Navbar;
