import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components";

export default function CheckBox(props) {
	if (props.completed === true) {
		return <Ionicons name="checkbox" size={32} color="green" style={ {marginLeft:20}} />;
	} else {
		return (
			<MaterialCommunityIcons
				name="checkbox-blank-outline"
				size={32}
				color="black"
				style={{ marginLeft: 20 }}
			/>
		);
	}
}

