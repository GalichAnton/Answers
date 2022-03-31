import React, { FC } from "react";
import { Answer } from "../../../interfaces/interfaces";
import classes from "./AnswersItem.module.scss";
interface QuestionItemProps {
  answer?: Answer;
}
const AnswersItem: FC<QuestionItemProps> = ({ answer }) => {
  return (
    <div className={classes.answer}>
      <h2 className={classes.title}>{answer?.title}</h2>
      <div className={classes.infoBox}>
        <div className={classes.imgBox}>
          <img src={answer?.image} alt="pic" />
        </div>
        <iframe
          className={classes.video}
          title="Youtube player"
          sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
          src={`https://youtube.com/embed/${answer?.video}?autoplay=0`}
        />
      </div>
      <p className={classes.descr}>{answer?.descr}</p>
      <ul className={classes.links}>
        Подробнее &gt;
        {answer?.links.map((link) => (
          <a className={classes.link} key={link.url} href={link.url}>
            {link.title}
          </a>
        ))}
      </ul>
    </div>
  );
};

export default AnswersItem;
