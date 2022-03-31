import React, { useEffect, useLayoutEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import AnswersItem from "./AnswerItem/AnswersItem";
import classes from "./Answers.module.scss";
import { useAppSelector } from "../../hooks/redux/redux-hooks";
import { Answer } from "../../interfaces/interfaces";
const Answers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentAnswers, setCurrentAnswers] = useState<Answer[]>([]);
  const generalAnswers = useAppSelector((state) => state.answer.generalAnswers);
  const jsAnswers = useAppSelector((state) => state.answer.jsAnswers);
  const { category, questionId } = useParams();
  const navigate = useNavigate();
  const onPageChange = (page: number) => {
    setCurrentPage(page);
    navigate(`/questions/${category}/${currentPage}`);
  };
  useEffect(() => {
    switch (category) {
      case "general":
        setCurrentAnswers(generalAnswers);
        return;
      case "js":
        setCurrentAnswers(jsAnswers);
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
