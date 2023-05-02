import React from 'react';
import "./footer.scss";
import video2 from "../../Assets/video2.mp4";
import {FiSend} from "react-icons/fi";

const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} muted autoPlay loop typeof="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel With Us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address'/>
            <button className='btn flex' type='submit'>
             Send <FiSend className='icon'/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer