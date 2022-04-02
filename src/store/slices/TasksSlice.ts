import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../../interfaces/interfaces";
import { jsTasks } from "../../data/Tasks/jsTasks";
export interface IState {
  jsTasks: Task[];
}

const initialState: IState = {
  jsTasks: jsTasks,
};

const TasksSlice = createSlice({
  name: "answer",
  initialState,
  reducers: {},
});

export const taskActions = TasksSlice.actions;
export default TasksSlice.reducer;
