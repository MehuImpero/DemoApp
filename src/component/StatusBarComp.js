import React from 'react';
import {View,StyleSheet,StatusBar} from 'react-native';
import colors from '../config/colors';



export default StatusBarComp = () => {
    return (
        <View style={styles.statusBar}>
                     <StatusBar  
                            backgroundColor = {colors.headerBg}  
                            barStyle = "light-content"   
                            translucent = {true}  
                    /> 
      </View>

    );
};
const styles = StyleSheet.create(
    {

        statusBar:{
            height:StatusBar.currentHeight,
            backgroundColor:colors.headerBg
          },
    });
