import React from "react";
import classes from "./ContentList.module.scss";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux/redux-hooks";
const categories = [
  { title: "Общие вопросы", name: "general" },
  { title: "Java Script", name: "js" },
  { title: "React", name: "react" },
  { title: "Type Script", name: "TS" },
];
const ContentList = () => {
  const generalAnswers = useAppSelector((state) => state.answer.generalAnswers);
  const jsAnswers = useAppSelector((state) => state.answer.jsAnswers);
  const categories = [
    { title: "Общие вопросы", name: "general", answers: generalAnswers },
    { title: "Java Script", name: "js", answers: jsAnswers },
  ];
  return (
    <div className={classes.wrapper}>
      <ul className={classes.list}>
        {categories.map((category) => (
          <li key={category.title}>
            <h3 className={classes.category}>{category.title}</h3>
            {category.answers.map((answer) => (
              <ul className={classes.answers} key={answer.id}>
                <li>
                  <NavLink
                    className={classes.item}
                    to={`questions/${category.name}/${answer.id}`}
                  >
                    {answer.title}
                  </NavLink>
                </li>
              </ul>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentList;
