/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/* eslint-disable */
import React from 'react';
import Header from './components/Header';
import AddButton from './components/AddButton';

import {SafeAreaView,  Text  ,View} from 'react-native';
import { Provider } from 'react-redux';
import rootReducers from './store/reducers/rootReducers';
 import { createStore } from 'redux';



const App = () => {
  return (
   <Provider store={createStore(rootReducers)}>
    <SafeAreaView>
      <Header/>

      <Text> Joseph tuyyiu</Text>
      <View style={{ alignItems:'flex-end' ,bottom:-400 , right:40 ,position:'relative' }}>
      <AddButton/>
      </View>

     
    </SafeAreaView>
    </Provider>
    
  );
};



export default App;
