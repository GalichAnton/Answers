import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import { answers } from "../../data/answers";
import QuestionItem from "./QuestionItem/QuestionItem";
const Questions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { questionId } = useParams();
  const navigate = useNavigate();
  const onPageChange = (page: number) => {
    setCurrentPage(page);
    navigate(`/questions/${currentPage}`);
  };
  return (
    <div>
      <QuestionItem
        answer={answers.find((answer) => answer.id === questionId)}
      />
      <Pagination
        onPageChange={onPageChange}
        totalCount={answers.length}
        siblingCount={1}
        currentPage={currentPage}
        pageSize={1}
        className={"class"}
      />
    </div>
  );
};

export default Questions;
