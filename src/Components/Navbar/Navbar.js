import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" style={{marginLeft:'20px', color:'#ffbb99'}}>
        <h3>ContactApp</h3>
      </Link>
    </div>
  );
}

export default Navbar;
