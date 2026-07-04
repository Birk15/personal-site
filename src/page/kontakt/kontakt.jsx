import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./kontakt.css";
const Kontakt = () => {
  const [status, setStatus] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ❗ Blockieren wenn Checkbox nicht angehakt
    if (!consent) {
      setStatus("Bitte stimmen Sie der Datenschutzerklärung zu.");
      return;
    }

    setStatus("Wird gesendet...");

    const formData = new FormData(e.target);
    try {
      const response = await fetch("https://api.staticforms.dev/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Nachricht erfolgreich gesendet!");
      } else {
        setStatus(`Fehler: ${result.message || "Unbekannter Fehler"}`);
      }
    } catch (error) {
      console.error(error);
      setStatus(`Catch: ${error.message}`);
    }
  };

  return (
    <section className="kontakt-page">
      {" "}
      <h1>Kontakt</h1>{" "}
      <p className="subtitle">
        {" "}
        Haben Sie Fragen oder möchten Sie ein unverbindliches Angebot? Ich freue
        mich auf Ihre Nachricht und melde mich schnellstmöglich bei Ihnen
        zurück.{" "}
      </p>{" "}
      <div className="kontakt-container">
        {" "}
        <div className="kontakt-info">
          {" "}
          <h2>Kontaktdaten</h2>{" "}
          <p>
            <strong>Name:</strong>
            <br />
            Birk Dinkelacker
          </p>{" "}
          <p>
            <strong>Adresse:</strong>
            <br /> 69412 Eberbach{" "}
          </p>{" "}
          <p>
            <strong>E-Mail:</strong>
            <br /> birkdinkelacker3@gmail.com{" "}
          </p>{" "}
          <p>
            <strong>Telefon:</strong>
            <br /> +49 176 84266852{" "}
          </p>{" "}
          <p>
            <strong>Einsatzgebiet:</strong>
            <br /> Eberbach und Umgebung{" "}
          </p>{" "}
        </div>{" "}
        <form onSubmit={handleSubmit} className="kontakt-form">
          {" "}
          <input
            type="hidden"
            name="apiKey"
            value="sf_61e7bcb9a800288f4c55657c"
          />
          <input
            type="hidden"
            name="subject"
            value="Birk Dinkelacker submission"
          />
          <h2>Nachricht senden</h2>{" "}
          <input name="name" type="text" placeholder="Ihr Name" required />{" "}
          <input name="email" type="email" placeholder="Ihre E-Mail" required />{" "}
          <input name="phone" type="tel" placeholder="Telefon (optional)" />{" "}
          <textarea
            name="message"
            rows="6"
            placeholder="Ihre Nachricht..."
            required
          ></textarea>{" "}
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="privacy"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
            />
            <label htmlFor="privacy">
              Ich habe die <Link to="/datenschutz">Datenschutzerklärung</Link>{" "}
              gelesen und stimme der Verarbeitung meiner Daten zum Zweck der
              Bearbeitung meiner Anfrage zu.
            </label>{" "}
          </div>
          <button type="submit"> Nachricht senden </button>{" "}
          {status && <p className="status-message">{status}</p>}
        </form>{" "}
      </div>{" "}
    </section>
  );
};
export default Kontakt;
