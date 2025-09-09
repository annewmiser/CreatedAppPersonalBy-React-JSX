import { useState } from "react";
import "./Header.css";
import { AiFillSun } from "react-icons/ai";
import { BiSolidMoon } from "react-icons/bi";

const Header = ({ title, theme, setTheme }) => {
  //Variable

  //State

  //Function
  const toggleTheme = () => {
    if (theme === "Light") {
      setTheme("Dark");
    } else {
      setTheme("Light");
    }
  };
  return (
    <nav>
      <h1>{title}</h1>
      <span onClick={toggleTheme} className="cursor-pointer">
        {theme === "Light" ? (
          <AiFillSun size={30} />
        ) : (
          <BiSolidMoon size={30} />
        )}
      </span>
    </nav>
  );
};

export default Header;
