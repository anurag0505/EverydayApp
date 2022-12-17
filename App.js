import React from "react";
import HomeScreen from "./Screens/HomeScreen";
import styled from "styled-components";
import { store } from "./redux/store";
import { Provider } from "react-redux";


const App = () => {
	return (
		<Provider store={store}>
			<Container>
				<HomeScreen />
			</Container>
		</Provider>
	);
};

export default App;

const Container = styled.View`
	flex: 1;
`;
