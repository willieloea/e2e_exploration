import React from 'react'; 
import { 
	StyleSheet, Button, View, SafeAreaView, 
	Text, Alert 
} from 'react-native';
 
export default function App() { 
	const [outputText, setOutputText] = React.useState(
		'Press the button to log something to the console'
	);
	const [counter, setCounter] = React.useState(0);
	return ( 
		<View style={styles.container}> 
      <Text>Log something to the console:</Text>
			<Button 
				testId="printButton"
				title="Print"
				onPress={() => {
					console.log('Button pressed');
					setOutputText('Button pressed');
					// increment counter
					setCounter(counter + 1);
				}}
			/>
			<Text>{outputText}</Text>
			<Text>Counter: {counter}</Text>
		</View> 
	); 
} 

// Some styles given to button 
const styles = StyleSheet.create({ 
	container: { 
		flex: 1, 
		backgroundColor: '#71EC4C', 
		alignItems: 'center', 
		justifyContent: 'center', 
	}, 
}); 
