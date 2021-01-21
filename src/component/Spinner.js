import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import colors from '../config/colors';


const Spinner = ({ size }) => {
	return (
		<View style={styles.spinnerStyle}>
			<ActivityIndicator  animating={true} size={size || 'large'} />


		</View>
	);
};

const styles = {
 spinnerStyle: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor:colors.white
 }

};

export default Spinner ;