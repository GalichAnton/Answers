import React from "react";
import classes from "./Header.module.scss";
const Header = () => {
  return (
    <header className={classes.header}>
      <h2 className={classes.title}>Список вопросов и задач к собеседованию</h2>
    </header>
  );
};

export default Header;
