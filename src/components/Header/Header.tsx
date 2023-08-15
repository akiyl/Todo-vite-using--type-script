import { useState } from "react";

import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";
import "../Header/Header.css";

const Header = () => {
  const [theme, settheme] = useState("light");

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
    } else if (theme === "dark") {
      settheme("light");
    }
  };

  return (
    <div className={theme}>
      <div className="logo">
        <div className="heading">Todo</div>
        <button className={theme} onClick={handleCLick}>
          {" "}
          <img src={handleTheme(theme)} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Header;
