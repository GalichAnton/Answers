import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import classes from "./MainPage.module.scss";
import ContentList from "../../components/ContentList/ContentList";
const MainPage = () => {
  const location = useLocation();
  return (
    <div className={classes.mainPage}>
      <Header />

      {location.pathname === "/" ? <ContentList /> : <Outlet />}
      <Footer />
    </div>
  );
};

export default MainPage;
