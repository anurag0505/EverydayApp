import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTask } from "../redux/reducers/TaskSlice";

const AddTodo = () => {
	const [text, setText] = useState();
	const dispatch = useDispatch();

	function handleSubmit() {
		dispatch(addTask(text));
	}

	function editTodo() {
		dispatch(editTask());
	}

	return (
		<Container>
			<TextInput
				value={text}
				placeholder="enter text here"
				onChangeText={setText}
			/>
			<Button title="Add Todo" onPress={handleSubmit} />
			<Button title="Edit Todo" onPress={editTodo} />
		</Container>
	);
};

export default AddTodo;

const Container = styled.View`
	background-color: aliceblue;
	flex: 1;
`;
const Button = styled.Button`
	height: 50px;
	width: 60px;
`;
const TextInput = styled.TextInput`
	height: 50px;
	width: 250px;
`;
