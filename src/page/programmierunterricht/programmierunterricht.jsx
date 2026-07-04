import React from "react";
import { Link } from "react-router-dom";
import "./programmierunterricht.css";

const Programmierunterricht = () => {
  return (
    <section className="programmierunterricht">
      <h1>Programmierunterricht für Anfänger</h1>

      <p className="subtitle">
        Du möchtest Programmieren lernen oder herausfinden, ob Informatik das
        Richtige für dich ist? Gemeinsam entwickeln wir Schritt für Schritt
        eigene Projekte – verständlich, praxisnah und ohne Vorkenntnisse.
      </p>

      <div className="cards">
        <div className="card">
          <h2>Das lernst du</h2>

          <ul>
            <li>Grundlagen des Programmierens</li>
            <li>HTML & CSS – eigene Webseiten gestalten</li>
            <li>JavaScript – Webseiten interaktiv machen</li>
            <li>React – moderne Webentwicklung</li>
            <li>Python – Programmieren leicht lernen</li>
            <li>SQL und Datenbanksysteme</li>
          </ul>
        </div>

        <div className="card">
          <h2>So läuft der Unterricht ab</h2>

          <ul>
            <li>Individuell auf dein Lerntempo abgestimmt</li>
            <li>Keine Vorkenntnisse erforderlich</li>
            <li>Viele praktische Übungen</li>
            <li>Eigene kleine Projekte entwickeln</li>
            <li>Fragen jederzeit willkommen</li>
            <li>Vorbereitung auf Schule oder Studium möglich</li>
          </ul>
        </div>

        <div className="card">
          <h2>Für wen?</h2>

          <ul>
            <li>Schülerinnen und Schüler</li>
            <li>Jugendliche mit Interesse an Informatik</li>
            <li>Studieninteressierte</li>
            <li>Erwachsene mit Interesse am Programmieren</li>
            <li>Einzelunterricht in entspannter Atmosphäre</li>
          </ul>

          <Link className="kontakt-button" to="/kontakt">
            Unverbindlich anfragen
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Programmierunterricht;
