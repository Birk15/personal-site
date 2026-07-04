import React from "react";
import { Link } from "react-router-dom";
import "./technikhilfe.css";

const Technikhilfe = () => {
  return (
    <section className="technikhilfe">
      <h1>Technikhilfe bei Ihnen zu Hause</h1>

      <p className="subtitle">
        Sie haben Probleme mit Ihrem Computer, Smartphone oder Tablet? Ich komme
        direkt zu Ihnen nach Hause und unterstütze Sie verständlich, geduldig
        und persönlich.
      </p>

      <div className="technik-cards">
        <div className="technik-card">
          <h2>Wobei ich Ihnen helfen kann</h2>

          <ul>
            <li>Computer oder Laptop einrichten</li>
            <li>Smartphone oder Tablet erklären</li>
            <li>Drucker einrichten</li>
            <li>WLAN- oder Internetprobleme lösen</li>
            <li>E-Mail-Konto einrichten</li>
            <li>Programme installieren</li>
            <li>Datensicherung</li>
            <li>Allgemeine Fragen zur Technik beantworten</li>
          </ul>
        </div>

        <div className="technik-card">
          <h2>Ihre Vorteile</h2>

          <ul>
            <li>Persönliche Hilfe direkt bei Ihnen zu Hause</li>
            <li>Keine komplizierte Fachsprache</li>
            <li>Geduldige und verständliche Erklärungen</li>
            <li>Hilfe für jedes Alter</li>
            <li>Regional in Eberbach und Umgebung</li>
          </ul>
        </div>

        <div className="technik-card">
          <h2>Preise</h2>

          <ul>
            <li>Faire und transparente Preise</li>
            <li>Abrechnung nach Aufwand</li>
            <li>Anfahrt im Raum Eberbach nach Absprache</li>
          </ul>

          <Link className="kontakt-button" to="/kontakt">
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Technikhilfe;
