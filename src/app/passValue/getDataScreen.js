import React, { Component } from 'react';
import {View, ActivityIndicator,Text,StatusBar,KeyboardAvoidingView} from 'react-native';



import stylesMain from "../../style/loginStyle";
import InputComp from '../../component/InputComp';
import ButtonComp from '../../component/ButtonComp';
import Loader from '../../component/Loader'

import {NavigationActions} from 'react-navigation';



export default class getDataScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          

           
    
           
        };


     
    }

    static navigationOptions = {
        header: null
    };

    componentDidMount(){
    }
   
    setMove(){



        const navigateAction = NavigationActions.navigate({
            routeName: "CustomDrawerComp"
          });
          this.props.navigation.dispatch(navigateAction);

      }
   
    login(){

       
            console.log("from ===",this.props.navigation.getParam('from'));
            console.log("data ===",this.props.navigation.getParam('data'));


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
                                    BtnName={"Post"}
                                    BtnPress={() => this.setMove()}
                                />
                                 <ButtonComp
                                    BtnName={"getData"}
                                    BtnPress={() => this.login()}
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


