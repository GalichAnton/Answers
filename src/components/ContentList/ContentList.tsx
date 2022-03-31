import React from "react";
import classes from "./ContentList.module.scss";
import { NavLink } from "react-router-dom";
import { answers } from "../../data/answers";

const ContentList = () => {
  return (
    <div className={classes.wrapper}>
      <ul className={classes.list}>
        {answers.map((answer) => (
          <li key={answer.id} className={classes.item}>
            <NavLink to={`questions/${answer.id}`}>{answer.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentList;
