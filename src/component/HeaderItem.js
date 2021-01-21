import React from 'react';
import { Text, TouchableOpacity,Image, View, StyleSheet,Dimensions } from 'react-native';
import colors from '../config/colors';
import globalImage from '../config/globalImage';
import StyleConfig from '../config/StyleConfig'


export default HeaderItem = ({optionTitle,optionLeftIcon,onPressLeft,optionRight,onPressRight}) => {


    return (
  
        <View style={Styles.subContainer}>
            
            <TouchableOpacity style={Styles.view1Style} onPress={onPressLeft}>  
                <Image source={globalImage.leftBackImg} style={Styles.cartImageStyle} />

            </TouchableOpacity> 
            
            <View style={Styles.view2Style}>  
                    <Text style={Styles.textStyle2}>{optionTitle}</Text>
            </View>


           




          
                                            
        </View>
               

  

 
 );
};


const Styles = StyleSheet.create({

    


    subContainer: {
        width: '90%',
        height: Dimensions.get('window').width * 0.10,
        flex:1,
        flexDirection: 'row',
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:colors.headerBg 

    },


    view1Style:{
        padding:4,
        alignItems:'flex-start',
        justifyContent: 'center',
        alignContent: 'center',
    },

    view2Style:{
        flex:1,
        padding:4,
        justifyContent: 'center',
           },
   
    view3Style:{
        flex:1,
        padding:4,
        justifyContent: 'center',
        alignItems:'flex-end',
        marginRight:4,

    },

    imageStyle:{
        height:16,
        width:12,
    },

    
    cartImageStyle:{
        height:StyleConfig.countPixelRatio(22),   
        width:StyleConfig.countPixelRatio(28),   
      },

    textStyle2:{
        fontFamily: StyleConfig.fontMedium,        
        fontSize:StyleConfig.countPixelRatio(18), 
        color:colors.white,
        textAlign:'center',
        width:'94%',
    },
});