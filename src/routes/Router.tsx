import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import Answers from "../components/Answers/Answers";
import Tasks from "../components/Tasks/Tasks";
const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route
            path={"questions/:category/:questionId"}
            element={<Answers />}
          />
          <Route path={"tasks/:category/:taskId"} element={<Tasks />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
