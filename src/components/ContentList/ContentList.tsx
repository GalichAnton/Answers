import React from "react";
import classes from "./ContentList.module.scss";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux/redux-hooks";
const ContentList = () => {
  const { generalAnswers, jsAnswers, tsAnswers, reactAnswers, gitAnswers } =
    useAppSelector((state) => state.answer);
  const { jsTasks } = useAppSelector((state) => state.tasks);
  const categories = [
    { title: "Общие вопросы", name: "general", answers: generalAnswers },
    { title: "Java Script", name: "js", answers: jsAnswers },
    { title: "Type Script", name: "ts", answers: tsAnswers },
    { title: "React/Redux", name: "react", answers: reactAnswers },
    { title: "Git", name: "git", answers: gitAnswers },
    { title: "JS задачки", name: "js", answers: jsTasks },
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
                    to={
                      category.title.includes("задачки")
                        ? `tasks/${category.name}/${answer.id}`
                        : `questions/${category.name}/${answer.id}`
                    }
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
