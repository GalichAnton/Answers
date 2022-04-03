import React, { FC } from "react";
import { Task, Category } from "../../../interfaces/interfaces";
import classes from "../../Answers/AnswerItem/AnswersItem.module.scss";
interface QuestionItemProps {
  task?: Task;
}
const TaskItem: FC<QuestionItemProps> = ({ task }) => {
  const setCategory = (category: Category | undefined) => {
    switch (category) {
      case "general":
        return "Общие вопросы";
      case "js":
        return "Java Script задачи";
      case "ts":
        return "Type Script";
      case "react":
        return "React";
      default:
        return "";
    }
  };
  return (
    <div className={classes.answer}>
      <h2 className={classes.title}>{setCategory(task?.category)}</h2>
      <h2 className={classes.title}>{task?.title}</h2>
      <div className={classes.infoBox}>
        <iframe
          className={classes.iframeBox}
          allowFullScreen
          frameBorder="0"
          title="Youtube player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          src={`https://youtube.com/embed/${task?.video}?autoplay=0`}
        />
        <iframe
          className={classes.iframeBox}
          height="400"
          scrolling="no"
          title={task?.title}
          src={task?.codepenUrl}
          frameBorder="no"
          loading="lazy"
          allowFullScreen={true}
        />
      </div>
      <h3 className={classes.descr}>Постановка задачи</h3>
      <p className={classes.descr}>{task?.descr}</p>
    </div>
  );
};

export default TaskItem;
