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
import Card from './components/Card';

import {SafeAreaView,  Text  ,View} from 'react-native';




const App = () => {
  return (
  
    <SafeAreaView>
      <Header/>
     <View>

     <Card/>

      </View>


      <View style={{ alignItems:'flex-end' ,bottom:-400 , right:40 ,position:'relative' }}>
      <AddButton/>
      </View>

     
    </SafeAreaView>
   
    
  );
};



export default App;
