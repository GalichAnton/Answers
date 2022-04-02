import React, { FC } from "react";
import { Task, Category } from "../../../interfaces/interfaces";
import classes from "./TaskItem.module.scss";
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
          className={classes.video}
          allowFullScreen
          frameBorder="0"
          title="Youtube player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          src={`https://youtube.com/embed/${task?.video}?autoplay=0`}
        />
        <iframe
          height="400"
          style={{ width: "45%" }}
          scrolling="no"
          title="Palindrom"
          src={`https://codepen.io/galichanton/embed/${task?.codepenUrl}?default-tab=js`}
          frameBorder="no"
          loading="lazy"
          allowTransparency={true}
          allowFullScreen={true}
        >
          See the Pen{" "}
          <a href={`https://codepen.io/galichanton/pen/${task?.codepenUrl}`}>
            {task?.title}
          </a>{" "}
          by Anton Galich (
          <a href="https://codepen.io/galichanton">@galichanton</a>) on{" "}
          <a href="https://codepen.io">CodePen</a>.
        </iframe>
      </div>
      <h3 className={classes.descr}>Постановка задачи</h3>
      <p className={classes.descr}>{task?.descr}</p>
    </div>
  );
};

export default TaskItem;
