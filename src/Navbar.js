
import React from "react";

function Navbar() {
  return (
    <nav>
      <ul className="menu">
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      {/* Missing mobile nav toggle */}
    </nav>
  );
}

export default Navbar;
