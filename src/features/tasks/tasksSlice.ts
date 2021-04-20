import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import "react-native-get-random-values";
import { nanoid } from "nanoid";

export interface ITask {
  id: string;
  value: string;
  complete: boolean;
}

interface TasksState {
  value: ITask[];
}

const initialState: TasksState = {
  value: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const task: ITask = {
        id: nanoid(),
        value: action.payload,
        complete: false,
      };

      state.value.push(task);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((task) => task.id !== action.payload);
    },
    completeTask: (state, action: PayloadAction<string>) => {
      state.value.forEach((task) => {
        if (task.id === action.payload) {
          task.complete = !task.complete;
        }
      });
    },
  },
});

export const { addTask, deleteTask, completeTask } = tasksSlice.actions;

export const selectTasks = (state: RootState) => state.tasks.value;

export default tasksSlice.reducer;
