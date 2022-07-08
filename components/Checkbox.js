/* eslint-disable */
import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons//MaterialIcons';


const CheckBox = (props) => {
	const iconName = props.isChecked ?
		"check-box" : "check-box-outline-blank";
        const strike = props.isChecked ? 
             "line-through " : ""

	return (
		<View style={styles.container}>
			<Pressable onPress={props.onPress}>
				<Icon
					name={iconName} size={24} color="#000" />
			</Pressable>
			<Text style={[styles.title , {textDecorationLine: strike}]}>{props.title}</Text>
		</View>
	);
};

export default CheckBox;

const styles = StyleSheet.create({
	container: {
		justifyContent: "flex-start",
		alignItems: "center",
		flexDirection: "row",
		width: 150,
		marginTop: 5,
		marginHorizontal: 5,
	},
	title: {
		fontSize: 16,
		color: "#000",
		marginLeft: 5,
		fontWeight: "600",
	},
});
