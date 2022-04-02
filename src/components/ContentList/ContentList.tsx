import React from "react";
import classes from "./ContentList.module.scss";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux/redux-hooks";
const ContentList = () => {
  const generalAnswers = useAppSelector((state) => state.answer.generalAnswers);
  const jsAnswers = useAppSelector((state) => state.answer.jsAnswers);
  const tsAnswers = useAppSelector((state) => state.answer.tsAnswers);
  const reactAnswers = useAppSelector((state) => state.answer.reactAnswers);
  const gitAnswers = useAppSelector((state) => state.answer.gitAnswers);
  const categories = [
    { title: "Общие вопросы", name: "general", answers: generalAnswers },
    { title: "Java Script", name: "js", answers: jsAnswers },
    { title: "Type Script", name: "ts", answers: tsAnswers },
    { title: "React/Redux", name: "react", answers: reactAnswers },
    { title: "Git", name: "git", answers: gitAnswers },
  ];
  return (
    <div className={classes.wrapper}>
      <ul className={classes.list}>
        {categories.map((category) => (
          <li key={category.title}>
            <h3 className={classes.category}>{category.title}</h3>

            <ol className={classes.answers}>
              {category.answers.map((answer) => (
                <li key={answer.id}>
                  <NavLink
                    className={classes.item}
                    to={`questions/${category.name}/${answer.id}`}
                  >
                    {answer.title}
                  </NavLink>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentList;
