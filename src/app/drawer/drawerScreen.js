import React, { Component } from 'react';
import { Button, View,StatusBar} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'


import passDataScreen from '../passValue/passDataScreen';
import getDataScreen from '../passValue/getDataScreen';

const Drawer = createDrawerNavigator();



export default class drawerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          

           
    
           
        };
     
    }

    static navigationOptions = {
        header: null
    };

   
    



    render() {
        return (
            <View style={{flex:1}} >

                <StatusBar  
                    backgroundColor = "#1c1c1e"  
                    barStyle = "light-content"   
                    translucent = {true}  
                />   

                    <NavigationContainer>
                        <Drawer.Navigator initialRouteName="Home">

                            
                            <Drawer.Screen name="Pass" component={passDataScreen}   navigation={this.props.navigation}    />
                            <Drawer.Screen name="Get" component={getDataScreen}   navigation={this.props.navigation} />
                        </Drawer.Navigator>
                        </NavigationContainer>


            </View>
    
            );
    }
}


