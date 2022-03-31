import { configureStore } from "@reduxjs/toolkit";
import ansverReducer from "./slices/AnswerSlice";

export const store = configureStore({
  reducer: {
    answer: ansverReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
