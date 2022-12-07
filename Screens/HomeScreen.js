// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

import { Ionicons } from "@expo/vector-icons";
import { ScrollView, SafeAreaView } from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import Calendar from "../Components/Calendar";

import styled from "styled-components";
import Task from "../Components/Task";
import React, { useState } from "react";

export default function HomeScreen() {
	//const [tasklist, setTaskList] = useState(LisOfTask);	

	return (
		<Container>
			<TitleBar>
				<Avatar source={require("../assets/avatar-default.jpg")} />
				<Title>Welcome Back,</Title>
				<Name>Anurag</Name>
				<Ionicons
					name="notifications"
					size={24}
					color="#4775f2"
					style={{ position: "absolute", right: 20, top: 5 }}
				/>
			</TitleBar>
			<Calendar />
			<DailyContent>Enter All Your Daily Task</DailyContent>
			{/* <Task  completed={task1.completed} description={task1.description}  />
			<Task completed={task2.completed} description={task2.description} />
			<Task completed={task3.completed} description={task3.description} /> */}
			<Task />
			
		</Container>
	);
}

const Container = styled.View`
	flex: 1;
	background-color: #f0f3f5;
`;

const Title = styled.Text`
	font-size: 16px;
	color: #b8bece;
	font-weight: 500;
`;

const Name = styled.Text`
	font-size: 20px;
	color: #3c4560;
	font-weight: bold;
`;

const TitleBar = styled.View`
	width: 100%;
	margin-top: 50px;
	padding-left: 80px;
`;

const Avatar = styled.Image`
	width: 44px;
	height: 44px;
	border-radius: 22px;
	background-color: black;
	margin-left: 20px;
	position: absolute;
	top: 0;
	left: 0;
`;
const Subtitle = styled.Text`
	font-size: 15px;
	font-weight: 600;
	text-transform: uppercase;
	color: #b8bece;
	margin-top: 20px;
	margin-left: 20px;
`;

const DailyContent = styled.Text`
	font-size: 22px;
	font-weight: 600;
	color: black;
	opacity: 0.8;
	margin: 20px auto;
`;
const Title1 = styled.Text`
	height: 40px;
	width: 300px;
	margin: 20px 20px;
	box-shadow: 0px 0px 0px rgba(27, 31, 36, 0.15);
	background-color: white;
	justify-content: center;
	align-items: center;
`;
