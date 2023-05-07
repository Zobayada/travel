import React, { useEffect } from "react";
import "./Contact.scss";

import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="contact">
      <div data-aos="fade-left" className="contactTitle">
        <h3 data-aos="fade-up" className="contitle">
          Contact information
        </h3>
        <p className="text">
          Si elit omnes impedit ius, vel et hinc agam fabulas. Ut audiam
          invenire iracundia vim. Tn ea diam ea. Piber Korem sit amet.
        </p>
        <p className="text">
          Al elit omnes impedfghit ius, vel et hinc agam fabulas. Ut audiam inve
          nire iracu ndia vim. En eam dico simi lique, ut sint posse sit, eum
          sumo diam ea. Liber consec tetuer in mei, sea in imperdiet assue verit
          contentiones, an his cibo bla ndit tacimates. Iusto iudi cabit simil
          ique id velex, in sea rebum deser uisse appntur honcus. Maece nas cibo
          blandit tacim ates sint posse.
        </p>
      </div>
      <div data-aos="fade-right" className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14686.260083252851!2d91.3751312571293!3d23.039738115427404!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1683489693062!5m2!1sen!2sbd"
          width="450"
          height="250"
          style={{ border: "0" }}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
