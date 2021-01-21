import React, { Component } from 'react';
import {View, ActivityIndicator,Text,StatusBar,KeyboardAvoidingView} from 'react-native';


import stylesMain from "../../style/loginStyle";
import InputComp from '../../component/InputComp';
import ButtonComp from '../../component/ButtonComp';
import Loader from '../../component/Loader'



export default class passDataScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          

           
            data :["Mehul","Meggy"]

           
        };
     
    }

    static navigationOptions = {
        header: null
    };

   
    login(){

       


            this.props.navigation.navigate('getDataScreen', {
                from: 86,
                data: this.state.data,
              });


      }



    render() {
        return (
            <View style={stylesMain.ContainerStyle} >

                <StatusBar  
                    backgroundColor = "#1c1c1e"  
                    barStyle = "light-content"   
                    translucent = {true}  
                />   
                    <View style={stylesMain.headerStyle}>
                        
                    </View>                    
                        <View style={stylesMain.bodyStyle}>
                      

                                <Text style={stylesMain.textTop1Style}>{"Signin"}</Text>
                               
                                                  
                                 <ButtonComp
                                    BtnName={"passData"}
                                    BtnPress={() => this.login()}
                                />
                                 <ButtonComp
                                    BtnName={"OpenDrawer"}
                                    BtnPress={() => this.props.navigation.toggleDrawer()}
                                />
                                
                    </View>
                    
                      {/* ------------------ Loader ----------------- */}
                               { this.props.isLoading == true ?
                                          <View style={stylesMain.LoaderContainer} >
                                                <ActivityIndicator size="large" color="#FFFFFF" />
                                          </View>
                                    : 
                                  null
                                }           
            </View>
    
            );
    }
}


