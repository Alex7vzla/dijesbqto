import React from "react";
import ml from "../assets/ML.png";
import fb from "../assets/facebook.png";
import inst from "../assets/instagram.png";
import wsp from "../assets/whatsapp.png";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="title">
        <h2>Síguenos en las redes</h2>

        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem, labore.
        </span>
      </div>

      <div className="box-social-media">
        <div className="box-media-ml">
          <img src={ml} alt="" />
        </div>
        <div className="box-media-fb">
          <img src={fb} alt="" />
        </div>
        <div className="box-media-inst">
          <img src={inst} alt="" />
        </div>
        <div className="box-media-what">
          <img src={wsp} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
