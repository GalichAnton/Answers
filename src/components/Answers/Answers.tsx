import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import AnswersItem from "./AnswerItem/AnswersItem";
import classes from "./Answers.module.scss";
import { useAppSelector } from "../../hooks/redux/redux-hooks";
import { Answer } from "../../interfaces/interfaces";
const Answers = () => {
  const [currentAnswers, setCurrentAnswers] = useState<Answer[]>([]);
  const { generalAnswers, jsAnswers, tsAnswers, reactAnswers, gitAnswers } =
    useAppSelector((state) => state.answer);
  const { category, questionId } = useParams();
  const [currentPage, setCurrentPage] = useState(Number(questionId));
  const navigate = useNavigate();
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    navigate(`/questions/${category}/${currentPage}`);
  }, [currentPage]);
  useEffect(() => {
    switch (category) {
      case "general":
        setCurrentAnswers(generalAnswers);
        return;
      case "js":
        setCurrentAnswers(jsAnswers);
        return;
      case "ts":
        setCurrentAnswers(tsAnswers);
        return;
      case "react":
        setCurrentAnswers(reactAnswers);
        return;
      case "git":
        setCurrentAnswers(gitAnswers);
        return;
      default:
        return;
    }
  }, [category]);

  return (
    <div className={classes.answers}>
      <AnswersItem
        answer={currentAnswers.find((answer) => answer.id === questionId)}
      />
      <button className={classes.button} onClick={() => navigate("/")}>
        К списку{" "}
      </button>
      <Pagination
        onPageChange={onPageChange}
        totalCount={currentAnswers.length}
        siblingCount={1}
        currentPage={currentPage}
        pageSize={1}
        className={"class"}
      />
    </div>
  );
};

export default Answers;
