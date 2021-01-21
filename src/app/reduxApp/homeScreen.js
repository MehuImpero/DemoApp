import colors from "../../config/colors";
import globalImage from '../../config/globalImage';
import StyleConfig from '../../config/StyleConfig'
import ButtonSlide from '../../component/ButtonSlide';

import React, {Component} from 'react';
import {FlatList,ActivityIndicator,Text,View,Alert,Slider,TouchableOpacity,Button} from 'react-native';
import stylesMain from '../../style/categoryStyle';


import ListComp from '../../component/ListComp';
import HeaderItem from '../../component/HeaderItem';
import StatusBarComp from '../../component/StatusBarComp';

import {connect} from 'react-redux';
import * as actions from '../../redux/actions/userAction'

let page = 1 ;

class homeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ListData:[],
      showMoreLoader:false,
    };
    this.onEndReachedMomentum=true

  }

   

  
// componentDidMount(){
//   this.CallFetachData()
// }



UNSAFE_componentWillMount(){
  this.CallFetachData()



}

CallFetachData(){

  this.props.userFunction(page).then(() => {
    
    if(this.props.error){
      console.log(JSON.stringify(this.props.error) ,' == error  ');
    }
    else{
      

        this.setState({ListData:this.props.userData.data});
        console.log("list data ====",this.state.ListData);
       page=page + 1;

       console.log("page new ==",page);
    }
  })

}


async callMoreApiGetContent(){


      console.log("PageHere===",page);

      this.props.userFunction(page).then(() => {
    
        if(this.props.error){
          console.log(JSON.stringify(this.props.error) ,' == error  ');
        }
        else{
    
            //this.setState({ListData:this.props.userData.data});

            this.setState({
              ListData:[...this.state.ListData,...this.props.userData.data]
            });   

          


            page=page + 1;
    
        }
      })
}


static navigationOptions = {
  header: null
};
    render() {
        return ( 
            <View style={stylesMain.ContainerStyle} >
                    <StatusBarComp />
                    <View style={stylesMain.headerStyle}>   
                        
                        <HeaderItem 
                              optionTitle={"Home"}
                              onPressLeft={() => this.props.navigation.goBack(null)} />
                              
                    </View>
                    

                    <View style={stylesMain.bodyStyle}>

                            <FlatList
                                data={this.state.ListData}
                                scrollEnabled={true}
                                bounces={false}
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{paddingVertical: StyleConfig.smartScale(2),paddingBottom:StyleConfig.smartScale(30)}}
                                renderItem={({ item,index }) => 
                                (       
                                        <ListComp
                                        itemData ={item}
                                        />
                                )}

                                ListFooterComponent={()=>{
                                  return(
                                      this.state.showMoreLoader == true ? 
                                      <ActivityIndicator  color="#FFFFFF" style={{bottom:0,position:'absolute',justifyContent:'center',alignSelf:'center'}} animating={this.state.showMoreLoader} size="large" />
                                      :
                                      null

                                  );
                                }}


                                onEndReached={async({ distanceFromEnd }) => { 
                                  console.log("OnreachEnd Call",this.onEndReachedMomentum)                        
                                  if(!this.onEndReachedMomentum){    
                                    if(page!=1){           
                                      
                                      console.log("Enter Next");
                                      this.callMoreApiGetContent();          
                                    }                                                                                                                                                                                                                                    
                                  }

                                  this.onEndReachedMomentum=true;
                                }}

                                onEndReachedThreshold={0.01}
                                onMomentumScrollBegin={() => {                                                 
                                  this.onEndReachedMomentum=false; 
                                  console.log("onMomentumScrollBegin",this.onEndReachedMomentum)
                                }}
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
  
  const mapStateToProps = state => ({
    isLoading:state.user.isLoading,
    userData:state.user.userData,
    error:state.user.error
  })
  
  const mapDispatchToProps = dispatch => ({
   // userFunction:() => dispatch(actions.userFunction())
   userFunction:(page) => dispatch(actions.userFunction({page}))

  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(homeScreen)