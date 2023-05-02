import React from "react";
import "./footer.scss";
import video2 from "../../Assets/video2.mp4";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineGithub,
} from "react-icons/ai";
import {FiChevronRight} from "react-icons/fi";

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
            <input type="text" placeholder="Enter Email Address" />
            <button className="btn flex" type="submit">
              Send <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore /> Travel.
              </a>
            </div>

            <div className="footerPara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quod
              numquam ratione accusantium quas, vitae perferendis ducimus,
              debitis iure nam laborum ipsam accusamus non aliquam iusto
              repellat! Ipsum fuga, quas recusandae tempore hic asperiores
              corrupti iure fugiat nobis reiciendis iusto expedita in commodi,
              neque magni veniam architecto voluptas inventore omnis.
            </div>

            <div className="footerSocial flex">
              <AiOutlineTwitter className="icon" />
              <AiOutlineYoutube className="icon" />
              <AiOutlineInstagram className="icon" />
              <AiOutlineGithub className="icon" />
            </div>
          </div>

          <div className="footerLink grid">
            <div className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
