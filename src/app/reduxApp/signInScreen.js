import React, { Component } from 'react';
import {View, ActivityIndicator,Text,StatusBar,KeyboardAvoidingView} from 'react-native';


import stylesMain from "../../style/loginStyle";
import InputComp from '../../component/InputComp';
import ButtonComp from '../../component/ButtonComp';
import Loader from '../../component/Loader'

import {connect} from 'react-redux';
import * as actions from '../../redux/actions/loginAction'


class signInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:'eve.holt@reqres.in',
            password:'cityslicka',
            isLoading:true,

           
           

           
        };
     
    }

    static navigationOptions = {
        header: null
    };

   
    login(){

        this.props.loginFunction(this.state.email,this.state.password).then(() => {
          if(this.props.error){
            alert(this.props.error)
          }
          else{

              this.props.navigation.navigate("homeTabScreen")
              console.log(JSON.stringify(this.props.userData) ,' == Token  ');
              alert(this.props.userData.user.name+' user successfully logged in ')
          }
        })
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
                        <KeyboardAvoidingView  keyboardShouldPersistTaps={'handled'}
                            style={{flex:1}}
                            bounces={false}
                            showsVerticalScrollIndicator={false}>

                                <Text style={stylesMain.textTop1Style}>{"Signin"}</Text>
                               
                                <InputComp
                                        lableName={"Email"}
                                        placeholder={"Enter_Email"}
                                        inputname={input => {this.email = input;}} 
                                        keyboardType='email-address'                              
                                        onChangeText={(text) => this.setState({email:text})}
                                        value={this.state.email}
                                    />
                                 <InputComp
                                        lableName={"Password"}
                                        secureTextEntry={true}
                                        placeholder={"Enter_Password"}
                                        inputname={input => {this.password = input;}}                               
                                        onChangeText={(text) => this.setState({password:text})}
                                        value={this.state.password}
                                    />                        
                                 <ButtonComp
                                    BtnName={"Login"}
                                    BtnPress={() => this.login()}
                                />
                          </KeyboardAvoidingView>                                              
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


const mapStateToProps = state => ({
  isLoggedIn:state.auth.isLoggedIn,
  isLoading:state.auth.isLoading,
  userData:state.auth.userData,
  error:state.auth.error
})

const mapDispatchToProps = dispatch => ({
    loginFunction:(email,password) => dispatch(actions.loginFunction({email,password}))
})

export default connect(mapStateToProps,mapDispatchToProps)(signInScreen)

 
