import React, { useEffect } from "react";
import "./Error.scss";
import error from "../../Assets/404.png";
import { NavLink } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

const Error = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="error container section">
      <div data-aos="fade-down" className="errorImg">
        <img src={error} alt="error" />
      </div>

      <h1>Oops! Look like you're lost</h1>
      <h3>Either something went wrong or the page doesn't exist anymore.</h3>
      <button className="btn flex">
        <NavLink to="/"> Back To Home </NavLink>
      </button>
    </section>
  );
};

export default Error;
