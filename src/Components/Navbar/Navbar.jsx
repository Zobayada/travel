import React, { useState } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const DropDownItem = (props) => {
  return (
    <li className="dropdownItem">
      <NavLink to={props.page}> {props.text} </NavLink>
    </li>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const [active, setActive] = useState("navBar");

  const showNav = () => {
    setActive("navBar activeNavbar");
  };

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
              <div className="menu_trigger">
                <NavLink
                  className="navLink"
                  onClick={() => {
                    setOpen1(!open1);
                  }}
                  onMouseEnter={() => {
                    setOpen1(true);
                  }}
                  onMouseLeave={() => {
                    setOpen1(false);
                  }}
                >
                  Shop
                </NavLink>
              </div>

              <div className={`dropdown_menu ${open1 ? "active" : "inactive"}`}>
                <ul
                  onMouseEnter={() => {
                    setOpen1(true);
                  }}
                  onMouseLeave={() => {
                    setOpen1(false);
                  }}
                >
                  <DropDownItem text="About Us" />
                  <DropDownItem text="Our team" />
                  <DropDownItem text="Contact Us" />
                </ul>
              </div>
            </li>
            <li className="navItem">
              <div className="menu_trigger">
                <NavLink
                  className="navLink"
                  onClick={() => {
                    setOpen(!open);
                  }}
                  onMouseEnter={() => {
                    setOpen(true);
                  }}
                  onMouseLeave={() => {
                    setOpen(false);
                  }}
                >
                  Pages
                </NavLink>
              </div>

              <div className={`dropdown_menu ${open ? "active" : "inactive"}`}>
                <ul
                  onMouseEnter={() => {
                    setOpen(true);
                  }}
                  onMouseLeave={() => {
                    setOpen(false);
                  }}
                >
                  <DropDownItem text="About Us" />
                  <DropDownItem text="Our team" />
                  <DropDownItem page="/contact" text="Contact Us" />
                </ul>
              </div>
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
};

export default Navbar;
