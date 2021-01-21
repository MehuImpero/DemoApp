import React, { Component } from 'react';
import {View, ActivityIndicator,Text,StatusBar,TextInput} from 'react-native';


import stylesMain from "../../style/loginStyle";
import InputComp from '../../component/InputComp';
import ButtonComp from '../../component/ButtonComp';
import Loader from '../../component/Loader'
import colors from '../../config/colors';
import StyleConfig from '../../config/StyleConfig'


export default class listNewsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          

           
            data :["Mehul","Meggy"],
            textVal:'',

           
        };
     
    }

    static navigationOptions = {
        header: null
    };





   
    login(){
            const apiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=3699b4391fd34ad49bfb26d062b62531";
            return fetch(apiUrl, {
                method:'get',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  }
            })
                .then((response) => response.json())
                .then((res) => {
                    console.log("resApp==",res)
                }).catch((error) => {
                    console.log("errorApp==",error.responseJson)
                });
      }
      callAPI(text){

        console.log("text=",text);

        this.setState({textVal:text});

            const apiUrl = "https://newsapi.org/v2/everything?q="+this.state.textVal+ "&apiKey=3699b4391fd34ad49bfb26d062b62531";
            return fetch(apiUrl, {
                method:'get',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  }
            })
                .then((response) => response.json())
                .then((res) => {
                    console.log("resSerch==",res)
                }).catch((error) => {
                    console.log("errorApp==",error.responseJson)
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
                                 {/* <ButtonComp
                                    BtnName={"OpenDrawer"}
                                    BtnPress={() => this.test()}
                                /> */}


                                           

                                            <TextInput
                                            
                                                placeholder="Serch Me.."
                                                placeholderTextColor={colors.white}
                                                style={{ width:'100%',
                                                paddingVertical:2,
                                                fontSize:StyleConfig.countPixelRatio(15),
                                                color:colors.white,
                                                paddingBottom:StyleConfig.countPixelRatio(6),
                                                borderBottomColor:colors.Inputbg,
                                                borderBottomWidth:0.5,
                                                marginVertical:2,
                                                paddingLeft:0,}}
                                                value={this.state.textVal}
                                                onChangeText={text => this.callAPI(text)}
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


