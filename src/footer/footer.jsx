import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section contact">
          <h1 className="footer-title">Birk Dinkelacker</h1>
          <p>69412 Eberbach­</p>
          <p>Email: birkdinkelacker3@gmail.com</p>
          <p>Telefon: +49 17684266852</p>
        </div>
        <div className="rechtliches">
          <p>
            <Link
              style={{ color: "whitesmoke", fontSize: "1.4rem" }}
              to="/impressum"
            >
              Impressum
            </Link>
          </p>
          <p>
            <Link
              style={{ color: "whitesmoke", fontSize: "1.4rem" }}
              to="/datenschutz"
            >
              Datenschutz
            </Link>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Birk Dinkelacker</p>
      </div>
    </footer>
  );
};

export default Footer;
