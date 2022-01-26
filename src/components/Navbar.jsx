import logo from "./swedsteel-logo.png";
import { useState, useEffect } from "react";

const Navbar = (props) => {

  const [active, setActive] = useState(false);

  const activate = () => {
    setActive(!active);
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <a
          href="https://swedsteel-metecno.com"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={logo}
            alt="Swedsteel white logo"
          />
        </a>
      </div>
      <nav className="nav-menu">
        <div
          className="hamb-menu"
          onClick={activate}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={!active ? "menu-list menu-dropdown" : "menu-list"}>
          {props.menuItems.map((val, ind) => (
            <li key={ind}>
              <a
                href={`#${val.id}`}
                onClick={activate}
              >
                {val.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;