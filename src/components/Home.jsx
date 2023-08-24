import React from "react";
import dije from "../assets/DIV.png";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-text">
        <h1>
          Dijes <br /> Barquisimeto
        </h1>
        
        <div className="box-img">
          <img src={dije} alt="" />
        </div>

        <p>
          Dijes Personalizados.
          <br />
          "Elegancia en cada detalle".
        </p>

        <a href="#about">
          <button className="btn">¡Conócenos!</button>
        </a>
      </div>
    </section>
  );
};

export default Home;
