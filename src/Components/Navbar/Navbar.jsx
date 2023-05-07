import React, {useState} from 'react';
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import {SiYourtraveldottv} from "react-icons/si";
import {AiFillCloseCircle} from "react-icons/ai";
import {TbGridDots} from "react-icons/tb";

const Navbar = () => {

  const [active, setActive] = useState("navBar");

  const showNav = () => {
    setActive("navBar activeNavbar");
  }

  const removeNav = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <SiYourtraveldottv className="icon" /> Travel.
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navList flex">
            <li className="navItem">
              <NavLink to="/" className="navLink">
                Home
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/packages" className="navLink">
                Packages
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/about" className="navLink">
                About
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/shop" className="navLink">
                Shop
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/pages" className="navLink">
                Pages
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/contact" className="navLink">
                Contact
              </NavLink>
            </li>

            <button className="btn">
              <a href="#"> Book Now</a>
            </button>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
}

export default Navbar