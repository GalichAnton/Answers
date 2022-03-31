import React, { FC } from "react";
import { Answer } from "../../../interfaces/interfaces";
interface QuestionItemProps {
  answer?: Answer;
}
const QuestionItem: FC<QuestionItemProps> = ({ answer }) => {
  return <div>{answer?.title}</div>;
};

export default QuestionItem;
