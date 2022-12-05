import React from "react";
import styled from "styled-components";
import CheckBox from "./CheckBox";

const Task = (props) => {
	return (
		<Container>
			<Wrapper>
				<CheckBox completed={props.completed} />
				<Description>{props.description} </Description>
			</Wrapper>
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
const Description = styled.TextInput`
	border: 2px solid black;
	margin-left: 8px;
	height: 60px;
	width: 80%;
	border-radius: 10px;
	padding: 5px 10px;
	color: red;
	font-size: 15px;
	font-weight: 400;
	text-transform: uppercase;
`;
