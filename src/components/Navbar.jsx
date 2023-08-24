import { useState, useEffect } from "react";
import "boxicons";

const Navbar = () => {

  const color = '#dddddd';

  const [active, setActive] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  //Escucha el evento de tamaño de pantalla para adaptar el navlink
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  //Funcion para activar el boton desplegable
  const handleClick = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  //Oculta los links al existir un scroll
  window.addEventListener('scroll', () => {
    if(!active) setActive(true);
  });

  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <a href="#home">
            <span>DB</span>
          </a>
        </div>

        {/*
        Renderizado condicional para las navlinks
        en funcion del tamaño de pantalla
        */}

        {screenWidth > 600 || active ? (
          <div className="nav-links-fullscreen">
            <ul>
              <li>
                <a href="#about">Sobre nosotros</a>
              </li>
              <li>
                <a href="">Galería</a>
              </li>
              <li className="contact-btn-nav">
                <a href="#contact">Contacto</a>
                <div className="boxi">
                  <box-icon
                    type="logo"
                    name="whatsapp"
                    color="white"
                    animation="tada"
                    size="sm"
                  ></box-icon>
                </div>
              </li>
            </ul>
          </div>
        ) : (
          <div className='nav-links-mobile'>
            <ul>
              <li>
                <a href="#about">Sobre nosotros</a>
              </li>
              <li>
                <a href="#gallery">Galería</a>
              </li>
              <li className="contact-btn-nav-mobile">
                <a href="#contact" className="icon-ref">
                  <box-icon
                    type="logo"
                    name="whatsapp"
                    color="white"
                    animation="tada"
                    size="md"
                  ></box-icon>
                </a>
              </li>
            </ul>
          </div>
        )}

        <div className="toggle">
          <a href="">
            <button onClick={handleClick}>
              <box-icon
                name="menu"
                size="lg"
                color={color}
                animation="flashing-hover"
              ></box-icon>
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
