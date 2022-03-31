import React, { FC } from "react";
import cn from "classnames";
import classes from "./Pagination.module.scss";
import { usePagination, DOTS } from "../../hooks/usePagination/usePagination";
import { left, right } from "./Arrows";

interface IPaginationProps {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  pageSize: number;
  className: string;
}
const Pagination: FC<IPaginationProps> = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={cn(classes.paginationContainer, { [className]: className })}>
      <li
        className={cn(classes.paginationItem, classes.arrow, {
          [classes.disabled]: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        {left}
      </li>
      {paginationRange.map((pageNumber: any, i: number) => {
        if (pageNumber === DOTS) {
          return (
            <li key={i} className={cn(classes.paginationItem, classes.dots)}>
              &#8230;
            </li>
          );
        }

        // Render our Page Pills
        return (
          <li
            key={i}
            className={cn(classes.paginationItem, {
              [classes.selected]: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={cn(classes.paginationItem, classes.arrow, {
          [classes.disabled]: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        {right}
      </li>
    </ul>
  );
};

export default Pagination;
