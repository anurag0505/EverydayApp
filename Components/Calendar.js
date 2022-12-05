import CalendarStrip from "react-native-calendar-strip";
import styled from "styled-components";
import { View, StyleSheet } from "react-native";

const Calendar = () => (
	<View style={styles.container}>
		<CalendarStrip
			scrollable
			style={{ height: 200, paddingTop: 20, paddingBottom: 10 }}
			calendarColor={"#3343CE"}
			calendarHeaderStyle={{ color: "white" }}
			dateNumberStyle={{ color: "white" }}
			dateNameStyle={{ color: "white" }}
			iconContainer={{ flex: 0.1 }}
		/>
	</View>
);

const styles = StyleSheet.create({
	container: { backgroundColor: "red", margin: 20 },
});

export default Calendar;
