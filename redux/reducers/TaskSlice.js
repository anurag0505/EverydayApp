import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	task1: {
		completed: true,
		description: "this is task 1",
	},

	task2: {
		completed: false,
		description: "this is task 2",
	},
	task3: {
		completed: true,
		description: "this is task 3",
	},
};

export const TaskSlice = createSlice({
	name: "task",
	initialState,
	reducers: {
		changeTask1: (state, action) => {
			state.task1 = action.payload;
		},
		// changeTask2: (state, action) => {
		// 	state.task2 = action.payload;
		// },
		// changeTask3: (state, action) => {
		// 	state.task3 = action.payload;
		// },
	},
});

export const { changeTask1, changeTask2, changeTask3 } = TaskSlice.actions;

export default TaskSlice.reducer;
