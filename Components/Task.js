import React from "react";
import styled from "styled-components";
import CheckBox from "./CheckBox";

//import { useSelector, useDispatch } from "react-redux";
import {
	changeTask1,
	changeTask2,
	changeTask3,
} from "../redux/reducers/TaskSlice";
import { TodoList } from "./TodoList";
import AddTodo from "./AddTodo";

const Task = (props) => {
	// const work = useSelector((state) => state.task);
	// const work2 = useSelector((state) => state.task.task2);
	// const work3 = useSelector((state) => state.task.task3);
	// const dispatch = useDispatch();

	// const handleChange = () => {
	// 	let editedTask = {
	// 		description: "if you smell what",
	// 		completed: false,
	// 	};
	// 	dispatch(changeTask1(editedTask));
	// };

	// const addCards = () => {
	// 	let addeditem = {
	// 		description: {},
	// 	};
	// };

	return (
		<Container>
			{/* <Wrapper>
				<CheckBox completed={props.completed} />
				<Description>{work.description}</Description>
			</Wrapper>

			<Button onPress={(e) => addCards()} title="Add-cards" />

			<Button onPress={() => handleChange()} title="Press Me" /> */}

			<AddTodo />
			<TodoList />
		</Container>
	);
};

export default Task;

const Container = styled.View`
	flex: 1;
	background-color: red;
`;
const Wrapper = styled.View`
	flex-direction: row;
	height: 100px;
	align-items: center;
`;
const Description = styled.Text`
	border: 2px solid black;
	margin-left: 8px;
	height: 60px;
	width: 80%;
	border-radius: 10px;
	padding: 18px 15px;

	color: black;
	font-size: 15px;
	font-weight: 400;
	text-transform: uppercase;
	background-color: white;
`;

const Button = styled.Button`
	height: 60px;
	width: 60px;
`;
const TaskCard = styled.View`
	height: 35px;
	width: 300px;
`;
