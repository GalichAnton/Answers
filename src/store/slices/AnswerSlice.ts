import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Answer } from "../../interfaces/interfaces";
import { generalAnswers } from "../../data/generalItems";
import { jsAnswers } from "../../data/jsAnswers";

export interface IState {
  generalAnswers: Answer[];
  jsAnswers: Answer[];
}

const initialState: IState = {
  generalAnswers: generalAnswers,
  jsAnswers: jsAnswers,
};

const AnswerSlice = createSlice({
  name: "answer",
  initialState,
  reducers: {},
});

export const answerActions = AnswerSlice.actions;
export default AnswerSlice.reducer;
