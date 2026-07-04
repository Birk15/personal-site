import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./navbar.css";

const Navbar = () => {
  const [farEnough, setFarEnough] = useState(window.innerWidth >= 1000);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setFarEnough(false);
      } else {
        setFarEnough(true);
        setMenuOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = (
    <>
      <Link onClick={() => menuOpen && setMenuOpen(false)} to="/">
        Start
      </Link>

      <Link onClick={() => menuOpen && setMenuOpen(false)} to="/webseite">
        Webseite
      </Link>

      <Link onClick={() => menuOpen && setMenuOpen(false)} to="/technikhilfe">
        Technikhilfe
      </Link>

      <Link
        onClick={() => menuOpen && setMenuOpen(false)}
        to="/programmierunterricht"
      >
        Programmierunterricht
      </Link>

      <Link onClick={() => menuOpen && setMenuOpen(false)} to="/kontakt">
        Kontakt
      </Link>
    </>
  );

  return (
    <header>
      <div className="nav-wrapper">
        <nav className={farEnough ? "nav1" : "nav2"}>
          {(farEnough && links) || (menuOpen && links)}
        </nav>

        {!farEnough && (
          <div className="menu-div" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X size={36} color="#2c82c9" />
            ) : (
              <Menu size={36} color="#2c82c9" />
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
