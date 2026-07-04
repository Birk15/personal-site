import React from "react";
import "./webseite.css";

const Webseite = () => {
  return (
    <section className="webseite">
      <h1>Webseitenentwicklung</h1>

      <p className="subtitle">
        Moderne, individuelle Webseiten für Privatpersonen, Vereine und
        Unternehmen.
      </p>

      <div className="cards">
        <div className="card">
          <h2>Vorteile</h2>

          <ul>
            <li>Moderne Technologien (React, HTML, CSS, JavaScript)</li>
            <li>Responsive Design für Smartphone, Tablet und PC</li>
            <li>Individuelle Gestaltung nach Ihren Wünschen</li>
            <li>Hosting und spätere Betreuung möglich</li>
            <li>Persönlicher Ansprechpartner in Eberbach</li>
          </ul>
        </div>

        <div className="card">
          <h2>Preise</h2>

          <ul>
            <li>Individuelles Angebot je nach Umfang</li>
            <li>
              Einfache Webseite: <strong>500 – 1000 €</strong>
            </li>
            <li>
              Webseite mit Datenbank: <strong>1000 – 3000 €</strong>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Webseite;
