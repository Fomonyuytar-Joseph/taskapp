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

import {SafeAreaView,  Text  ,View ,FlatList} from 'react-native';
import { useState } from 'react';




const App = () => {
    const [todos, setTodos] = useState('')

    const submitHandler = (text)=>{
   
      setTodos(prevTodos => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos,
        ];
      });

    }

  return (
  
    <SafeAreaView>
      <Header/>
     <View>

     <FlatList
            data={todos}
            renderItem={({ item }) => (
             <Card item={item}  />
            )}
          />
      </View>


      <View style={{ alignItems:'flex-end' ,bottom:-400 , right:40 ,position:'relative' }}>
      <AddButton submitHandler={submitHandler}/>
      </View>

     
    </SafeAreaView>
   
    
  );
};



export default App;
