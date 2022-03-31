import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import Answers from "../components/Answers/Answers";
const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route
            path={"questions/:category/:questionId"}
            element={<Answers />}
          />
        </Route>

        {/* <Route  element={<Tasks />} >*/}
        {/*  <Route path={':taskId'}/>*/}
        {/* </Route>*/}
        {/* <Route path={"*"} element={<NotFound />} />*/}
      </Routes>
    </HashRouter>
  );
};

export default Router;
