import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Answer } from "../../interfaces/interfaces";
import { generalAnswers } from "../../data/Answers/generalAnswers";
import { jsAnswers } from "../../data/Answers/jsAnswers";
import { tsAnswers } from "../../data/Answers/tsAnswers";
import { reactAnswers } from "../../data/Answers/reactAnswers";
import { gitAnswers } from "../../data/Answers/gitAnswers";

export interface IState {
  generalAnswers: Answer[];
  jsAnswers: Answer[];
  tsAnswers: Answer[];
  reactAnswers: Answer[];
  gitAnswers: Answer[];
}

const initialState: IState = {
  generalAnswers: generalAnswers,
  jsAnswers: jsAnswers,
  tsAnswers: tsAnswers,
  reactAnswers: reactAnswers,
  gitAnswers: gitAnswers,
};

const AnswerSlice = createSlice({
  name: "answer",
  initialState,
  reducers: {},
});

export const answerActions = AnswerSlice.actions;
export default AnswerSlice.reducer;
