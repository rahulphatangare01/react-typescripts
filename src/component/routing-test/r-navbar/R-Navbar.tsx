import React from "react";
import { Link } from "react-router-dom";
import "./R-NavarStyle.css";
const Navbar: React.FC = () => {
  return (
    // <nav>
    <div className="container">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {/* <ul className="ul-tag">
        <button>
        </button>
        <button>
        </button>
      </ul> */}
    </div>
    // </nav>
  );
};

export default Navbar;
