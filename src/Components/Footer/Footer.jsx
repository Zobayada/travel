import React, { useEffect } from "react";
import "./footer.scss";
import video2 from "../../Assets/video2.mp4";
import { FiSend } from "react-icons/fi";
import { SiYourtraveldottv } from "react-icons/si";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineGithub,
} from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} muted autoPlay loop typeof="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel With Us</h2>
          </div>

          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter Email Address"
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              Send <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <SiYourtraveldottv className="icon" /> Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerPara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quod
              numquam ratione accusantium quas, vitae perferendis ducimus,
              debitis iure nam laborum ipsam accusamus non aliquam iusto
              repellat! Ipsum fuga, quas recusandae tempore hic asperiores
              corrupti iure fugiat nobis reiciendis iusto expedita in commodi,
              neque magni veniam architecto voluptas inventore omnis.
            </div>

            <div data-aos="fade-up" className="footerSocial flex">
              <AiOutlineTwitter className="icon" />
              <AiOutlineYoutube className="icon" />
              <AiOutlineInstagram className="icon" />
              <AiOutlineGithub className="icon" />
            </div>
          </div>

          <div className="footerLink grid">
            {/* Group one  */}

            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
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

            {/* Group two  */}

            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">PARTNERS</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                HostelWorld
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>

            {/* Group three  */}

            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle">LAST MINUTE</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                London
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                California
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Indonesia
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Europe
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Oceania
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHT RESERVED - AFNAN 2023</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
