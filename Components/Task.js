import React from "react";
import styled from "styled-components";
import CheckBox from "./CheckBox";

import { useSelector, useDispatch } from "react-redux";
import {
	changeTask1,
	changeTask2,
	changeTask3,
} from "../redux/reducers/TaskSlice";

const Task = (props) => {
	const work = useSelector((state) => state.task.task1);
	const work2 = useSelector((state) => state.task.task2);
	const work3 = useSelector((state) => state.task.task3);
	const dispatch = useDispatch();

	return (
		<Container>
			<Wrapper>
				<CheckBox completed={props.completed} />
				<Description>{work.description}</Description>
			</Wrapper>
			<Wrapper>
				<CheckBox completed={props.completed} />
				<Description>{work2.description}</Description>
			</Wrapper>
			<Wrapper>
				<CheckBox completed={props.completed} />
				<Description>{work3.description}</Description>
			</Wrapper>
			{/* <Button>button</Button> */}
		</Container>
	);
};

export default Task;

const Container = styled.View``;
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
	padding:  18px 15px;
	
	color: black;
	font-size: 15px;
	font-weight: 400;
	text-transform: uppercase;
	background-color: white;
`;




