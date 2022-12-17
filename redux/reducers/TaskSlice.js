import { createSlice } from "@reduxjs/toolkit";

let nextId = 1;
const initialState = [
	{
		text: "i love my india",
		id: 0,
		completed: false,
	},
	{
		text: "i love my japan",
		id: 1,
		completed: false,
	},
];

export const TaskSlice = createSlice({
	name: "alltask",
	initialState,
	reducers: {
		addTask: (state, action) => {
			state.push({
				text: action.payload,
				id: nextId + 1,
				completed: false,
			});
		},
	},
});

export const { addTask } = TaskSlice.actions;

export default TaskSlice.reducer;
