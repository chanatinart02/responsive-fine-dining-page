import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";

import "./Navbar.css";

// create Menu link to component
const MenuLinks = () => (
  <>
    <li className="p__opensans">
      <a href="#home">Home</a>
    </li>
    <li className="p__opensans">
      <a href="#about">About</a>
    </li>
    <li className="p__opensans">
      <a href="#menu">Menu</a>
    </li>
    <li className="p__opensans">
      <a href="#awards">Awards</a>
    </li>
    <li className="p__opensans">
      <a href="#contact">Contact</a>
    </li>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="logo" />
      </div>
      {/* Menu link */}
      <ul className="app__navbar-links">
        <MenuLinks />
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In / Register
        </a>
        <div></div> {/* vertical line */}
        <a href="/" className="p__opensans">
          Books Table
        </a>
      </div>

      {/* for mobile menu */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {/* toggle menu = true and show */}
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex_center slide-bottom">
            <MdRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            {/* Menu link */}
            <ul className="app__navbar-smallscreen_links">
              <MenuLinks />
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
