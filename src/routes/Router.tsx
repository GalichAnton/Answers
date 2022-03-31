import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import Questions from "../components/Questions/Questions";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path={"questions/:questionId"} element={<Questions />} />
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
