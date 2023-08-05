import { useState } from "react";
import sun from "../images/icon-Sun.svg";
import moon from "../images/icon-moon.svg";
import "./Header.css";
// import { DarkMode } from "../Todo/darkmode";

const DarkMode = () => {
  return (
    <div className="Darkmode">
      <img src={sun} alt="" />
    </div>
  );
};
const LightMode = () => {
  return (
    <div className="Lightmode">
      <img src={moon} alt="" />
    </div>
  );
};

const Header = () => {
  const [theme, setTheme] = useState("light");

  const ToggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <header className="head">
      <div className="logo">
        <h1 className="heading">Todo</h1>
      </div>
      <div className="theme-buttons">
        <button className="switch-theme" onClick={ToggleTheme}>
          {theme === "dark" ? <DarkMode /> : <LightMode />}
        </button>
      </div>
    </header>
  );
};
export default Header;
