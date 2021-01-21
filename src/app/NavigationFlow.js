
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



import signInScreen from './reduxApp/signInScreen';
import homeTabScreen from './reduxApp/homeTabScreen';
import homeScreen from './reduxApp/homeScreen';
import profileScreen from './reduxApp/profileScreen';
import passDataScreen from './passValue/passDataScreen';
import getDataScreen from './passValue/getDataScreen';
import drawerScreen from './drawer/drawerScreen';
import radioScreen from './reduxApp/radioScreen';
import listNewsScreen from './news/listNewsScreen';



const App = createStackNavigator({

    profileScreen: { screen: profileScreen},
    homeScreen: { screen: homeScreen },
    signInScreen: { screen: signInScreen },
    passDataScreen: { screen: passDataScreen },
    getDataScreen: { screen: getDataScreen },
    drawerScreen: { screen: drawerScreen },
    radioScreen: { screen: radioScreen },
    listNewsScreen: { screen: listNewsScreen },

  
    homeTabScreen: 
  {
    screen: homeTabScreen,
    header: null,
    navigationOptions: {
      header: null
    }
  },
}, {
    initialRouteName: 'listNewsScreen',
});


export default createAppContainer(App);


 