import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa6";

const ThemeChanger = () => {
  const [darkMode, setDarkMode] = useState(false);

  //   set theme in local storage

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <button onClick={toggleDarkMode} className="text-[25px] md:text-3xl p-2">
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </>
  );
};

export default ThemeChanger;
