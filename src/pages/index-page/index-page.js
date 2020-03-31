import React from 'react';
import { Text, View } from "react-native";
import { connect } from "react-redux";

class Component extends React.Component {

	render() {
		return(
			<View>
				<Text style={{padding:10}}>
					successful
				</Text>
			</View>
		)
	}
}

export const Redux = connect((store) => {
	return {
		LocaleReducer: {
			strings: store.LocaleReducer.strings
		}
	};
})(Component);

export const IndexPage = Redux;
