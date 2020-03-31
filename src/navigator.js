import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { IndexPage } from './pages/index-page/index-page';


const Stack = createStackNavigator();

function Navigator () {

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name={"index"} component={IndexPage}/>
			</Stack.Navigator>
		</NavigationContainer>
	)

}

export const NavigationStack = Navigator;
