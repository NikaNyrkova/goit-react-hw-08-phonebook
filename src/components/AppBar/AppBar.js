import React from "react";
import s from "./AppBar.module.css";
import Navigation from "../Navigation";

const AppBar = () => {
  return (
    <header className={s.header}>
      <Navigation />
    </header>
  );
};

export default AppBar;
