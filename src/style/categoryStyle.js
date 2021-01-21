import { StyleSheet,Dimensions,Platform,StatusBar} from 'react-native';
import colors from '../config/colors';
import StyleConfig from '../config/StyleConfig';


export default StyleSheet.create ({

    ContainerStyle: {
        width:'100%',
        height:'100%',
        flex:1,
        backgroundColor:colors.black,   

    },

    headerStyle: {
      width:'100%',
      height: Dimensions.get('window').width * 0.14,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      backgroundColor:colors.headerBg,    
      
  },

  headerSettingStyle: {
    width:'100%',
    height:'10%', 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:colors.charcoalGrey,   
},

bodyStyle:{
  width:'100%',
  height:'70%',
  alignItems: 'center',
  justifyContent: 'center',
},

  footerStyle: {
    width:'100%',
    height:'10%', 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:colors.footerBg,   
},

bodyShopStyle:{
    width:'100%',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
},

textBottomStyle:{
  fontSize:StyleConfig.countPixelRatio(17),
  textAlign:'center',
  alignSelf:'center',
  marginVertical:6,
  color:colors.white,
},

    

    bodyStyle:{
       flex:1,
    },

    LoaderContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
  },
   
  ImageViewStyle1:{
    width:'50%',
    height:240,
    resizeMode: 'stretch'

  },


   
 

  textStyle:{
    fontSize:45,
    color:colors.white,
    fontWeight:'700'
  },

  text1Style:{
    fontSize:19,
    color:colors.white,
    marginTop:10
  },

  inputViewStyle:{
    marginTop:'8%',
    justifyContent:'center',

  },


  textBottemStyle:{
    fontSize:21,
    textAlign:'center',
    color:colors.white,
  },
text1BottemStyle:{
    fontSize:21,
    textAlign:'center',
    color:colors.white,
    textDecorationLine:'underline'
  },
  textForgotStyle:{
    marginTop:30,
    fontSize:21,
    textAlign:'center',
    color:colors.white,
    textDecorationLine:'underline'
  },

  headerViewStyle:{
    width:'90%',
    height:50, 
    backgroundColor:colors.sunflowerYellow
  },

  text: {
    fontFamily: StyleConfig.fontRegular,        
    fontSize:StyleConfig.countPixelRatio(15),  
    color: colors.white,
    marginVertical:10,
    marginLeft:20,
    marginRight:20,

  },

  thumbnail: {
    width:'100%',
    height: StyleConfig.countPixelRatio(148),
    borderTopLeftRadius:10,
    borderTopRightRadius:10,   
  },

}); 