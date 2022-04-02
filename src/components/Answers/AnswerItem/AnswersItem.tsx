import React, { FC } from "react";
import { Answer, Category } from "../../../interfaces/interfaces";
import classes from "./AnswersItem.module.scss";
interface QuestionItemProps {
  answer?: Answer;
}
const AnswersItem: FC<QuestionItemProps> = ({ answer }) => {
  const setCategory = (category: Category | undefined) => {
    switch (category) {
      case "general":
        return "Общие вопросы";
      case "js":
        return "Java Script";
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
      <h2 className={classes.title}>{setCategory(answer?.category)}</h2>
      <h2 className={classes.title}>{answer?.title}</h2>
      <div className={classes.infoBox}>
        <div className={classes.imgBox}>
          <img src={answer?.image} alt="pic" />
        </div>
        <iframe
          className={classes.video}
          allowFullScreen
          frameBorder="0"
          title="Youtube player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          src={`https://youtube.com/embed/${answer?.video}?autoplay=0`}
        />
      </div>
      <h3 className={classes.descr}>Краткое описание</h3>
      <p className={classes.descr}>{answer?.descr}</p>
      <ul className={classes.links}>
        Подробнее &gt;
        {answer?.links.map((link) => (
          <a
            className={classes.link}
            key={link.url}
            href={link.url}
            target={"_blank"}
            rel="noreferrer"
          >
            {link.title}
          </a>
        ))}
      </ul>
    </div>
  );
};

export default AnswersItem;
