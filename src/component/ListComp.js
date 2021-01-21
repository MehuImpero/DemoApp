import React from 'react';
import {View,StyleSheet,Image,Text,TouchableOpacity,TouchableWithoutFeedback} from 'react-native';
import colors from '../config/colors';
import globalImage from '../config/globalImage';
import StyleConfig from '../config/StyleConfig'




export default ListComp = ({itemData}) => {
    
    return (
               
                <View>
                   <View style={styles.ViewStyle}>
                      <View style={styles.textViewStyle}>
                              <Text style={styles.textTopStyle}>{itemData.first_name}</Text>
                      </View>


                    
                             <Image
                              style={styles.imageViewStyle}
                              defaultSource={globalImage.homeIcon}
                              source={globalImage.homeIcon}
                              source={{uri: itemData.avatar}}

                           
                             />               
                     

                     

                      <View style={styles.textViewStyle}>
                              <Text style={styles.textBottomStyle}>{itemData.email}</Text>
                      </View>
                       
                </View>
                
            

      </View>
    );
};
const styles = StyleSheet.create(
    {

      ViewStyle:{
          width:'94%',
          height:undefined,
          paddingVertical:14,
          alignSelf:'center',
          borderRadius:14,
          marginVertical:10,
          backgroundColor:colors.headerBg
          },

          textViewStyle:{
            width:'90%',
            height: undefined,
            alignSelf:'center',
            alignItems: 'center',
            
          },

          textTopStyle:{
            alignSelf: 'flex-start',
            width: undefined,
            height: undefined,
            fontSize:StyleConfig.countPixelRatio(15),  
            marginVertical:6,
            color:colors.white,
          },

          imageViewStyle:{
            width:'50%',
            alignSelf:'center',
            height:180,
            alignItems: 'center',
            borderRadius:14,
            marginTop:10
          },

          textBottomStyle:{
            alignSelf: 'flex-end',
            width: undefined,
            height: undefined,
            fontSize:StyleConfig.countPixelRatio(13),  
            bottom:6,
            color:colors.steel,
            marginTop:14
          },
          

               
    });
