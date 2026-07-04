import React from "react";
import { Link } from "react-router-dom";
import "./start.css";

const Start = () => {
  return (
    <div className="start">
      <div className="upper">
        <div className="img-container">
          <img src="/images/Foto-Birk.jpg" alt="Birk" />
        </div>

        <div className="welcome-container">
          <h1>Webentwicklung & Technikhilfe in Eberbach</h1>
          <p>Birk Dinkelacker</p>
        </div>
      </div>
      <div className="lower">
        <div className="offering">
          <h2>Meine Dienstleistungen</h2>
          <div className="links">
            <Link to="/webseite">Webseiten entwickeln</Link>
            <Link to="/technikhilfe">
              Unterstützung bei technischen Problemen
            </Link>
            <Link to="/programmierunterricht">
              Programmierunterricht für Anfänger
            </Link>
          </div>
        </div>
        <div className="kontakt_">
          <h2>So erreichen Sie mich</h2>
          <div className="links">
            <Link to="/kontakt">Kontaktformular</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
