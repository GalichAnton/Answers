import React from "react";
import classes from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <h2 className={classes.author}>Created by</h2>
      <a className={classes.author} href={"https://github.com/GalichAnton"}>
        Galich Anton
      </a>
    </footer>
  );
};

export default Footer;
