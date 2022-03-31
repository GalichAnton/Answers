import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import Answers from "../components/Answers/Answers";
const Router = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default Router;
