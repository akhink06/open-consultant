import { View, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Wallet from './src/components/screens/Wallet'
import Transactions from './src/components/screens/Transactions'


const App = () => {

	const Stack = createNativeStackNavigator();

	return (
		<NavigationContainer >
			<Stack.Navigator initialRouteName='Wallet' screenOptions={{headerShown:false}}>
				<Stack.Screen name='Wallet' component={Wallet} />
				<Stack.Screen name='Transactions'  component={Transactions} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App;


const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	}
})