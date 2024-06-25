import React from 'react'; 
import { 
	StyleSheet, Button, View, SafeAreaView, 
	Text, Alert 
} from 'react-native';
 
export default function App() { 
	return ( 
		<View style={styles.container}> 
      <Text>Log something to the console:</Text>
			<Button 
				title="Print"
				onPress={() => console.log("here we go")}
			/> 
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
