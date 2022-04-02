import { configureStore } from "@reduxjs/toolkit";
import answerReducer from "./slices/AnswerSlice";
import tasksReducer from "./slices/TasksSlice";
export const store = configureStore({
  reducer: {
    answer: answerReducer,
    tasks: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
