/* eslint-disable */
import 'react-native-gesture-handler';
import * as React from 'react'
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();





const AppWrapper =() =>{

   return(
    <Provider store={store}>
      
       
      <App/>
    </Provider>
   )

}

export default AppWrapper