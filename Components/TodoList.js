import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

export const TodoList = (props) => {
	const displayTasks = useSelector((state) => state.alltask);

	// if (state.task.length === 0) {
	// 	<Text>Add new Task here</Text>;
	// }
	return (
		<Container>
			{displayTasks.map((displayTask, index) => (
				<Text key={index}>{`${index + 1}.${displayTask.text}`}</Text>
			))}
			{/* <Text>{displayTask[0].text}</Text> */}
		</Container>
	);
};

const Container = styled.View`
	height: 60%;
	width: 100%;
	background-color: yellow;
`;
const Text = styled.Text`
	font-size: 10px;
	font-weight: 400;
	width: 260px;
	height: 60px;
	margin: 5px;
`;

// const Container = styled.View``;
