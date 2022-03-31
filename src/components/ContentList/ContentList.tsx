import React from "react";
import classes from "./ContentList.module.scss";
import { NavLink } from "react-router-dom";
const categories = [
  { title: "Общие вопросы", name: "general" },
  { title: "Java Script", name: "js" },
  { title: "React", name: "react" },
  { title: "Type Script", name: "TS" },
];
const ContentList = () => {
  return (
    <div className={classes.wrapper}>
      <ul className={classes.list}>
        {categories.map((category) => (
          <li key={category.title}>
            <NavLink
              className={classes.item}
              to={`questions/${category.name}/1`}
            >
              {category.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentList;
