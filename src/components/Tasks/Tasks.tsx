import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import { useAppSelector } from "../../hooks/redux/redux-hooks";
import { Answer } from "../../interfaces/interfaces";
import classes from "./Tasks.module.scss";
import TaskItem from "./TaskItem/TaskItem";
const Tasks = () => {
  const [currentTasks, setCurrentTasks] = useState<Answer[]>([]);
  const { jsTasks } = useAppSelector((state) => state.tasks);
  const { category, taskId } = useParams();
  const [currentPage, setCurrentPage] = useState(Number(taskId));
  const navigate = useNavigate();
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    navigate(`/tasks/${category}/${currentPage}`);
  }, [currentPage]);
  useEffect(() => {
    switch (category) {
      case "js":
        setCurrentTasks(jsTasks);
        return;
      default:
        return;
    }
  }, [category]);

  return (
    <div className={classes.answers}>
      <TaskItem task={currentTasks.find((answer) => answer.id === taskId)} />
      <button className={classes.button} onClick={() => navigate("/")}>
        К списку{" "}
      </button>
      <Pagination
        onPageChange={onPageChange}
        totalCount={currentTasks.length}
        siblingCount={1}
        currentPage={currentPage}
        pageSize={1}
        className={"class"}
      />
    </div>
  );
};

export default Tasks;
