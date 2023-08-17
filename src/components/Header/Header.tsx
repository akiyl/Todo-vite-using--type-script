// import { useState } from "react";

import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";
import "../Header/Header.css";

interface themeProps {
  theme: any;
  settheme: any;
}
const Header: React.FC<themeProps> = ({ theme, settheme }) => {
  const handleTheme = (e: string) => {
    if (e === "light") {
      return sun;
    } else if (e === "dark") {
      return moon;
    }
  };

  const handleCLick = () => {
    if (theme === "light") {
      settheme("dark");
      document.body.style.backgroundColor = " hsl(235, 21%, 11%)"; // Change background color to dark theme
    } else if (theme === "dark") {
      settheme("light");
      document.body.style.backgroundColor = "#fff"; // Change background color to light theme
    }
  };

  return (
    <div className={theme}>
      <div className="logo">
        <h1 className="heading">Todo</h1>
        <button className="btn" onClick={handleCLick}>
          <div className={theme}></div> <img src={handleTheme(theme)} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Header;
