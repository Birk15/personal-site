import React from "react";
import ScrollToTop from "./scrollToTop";
import { Route, Routes } from "react-router-dom";
import Start from "./page/start/start";
import Webseite from "./page/webseite/webseite";
import Technikhilfe from "./page/technikhilfe/technikhilfe";
import Programmierunterricht from "./page/programmierunterricht/programmierunterricht";
import Kontakt from "./page/kontakt/kontakt";
import Datenschutz from "./legal/datenschutz";
import Impressum from "./legal/impressum";

const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/webseite" element={<Webseite />} />
        <Route path="/technikhilfe" element={<Technikhilfe />} />
        <Route
          path="/programmierunterricht"
          element={<Programmierunterricht />}
        />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
    </>
  );
};

export default AppRouter;
