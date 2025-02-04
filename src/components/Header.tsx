"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdNightlight, MdWbSunny } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Load user's theme preference from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <img className="logo" src="car logo image .png" alt="logo" />
          <h1 className="logo-name">Car World</h1>
        </div>
        <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
          <Link href="/">HOME</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/cars">CARS</Link>
          <Link href="/contact">CONTACT</Link>
        </nav>
        <div className="actions">
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {isDarkMode ? <MdWbSunny size={24} /> : <MdNightlight size={24} />}
          </button>
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
