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
import CompletedTodoCard from './components/CompletedTodoCard';

import {SafeAreaView,  Text  ,View ,FlatList} from 'react-native';
import { useState } from 'react';







const App = () => {
    const [todos, setTodos] = useState('')
    const [completedTodos, setCompletedTodos] = useState('')


    const deleteHandler = (key)=>{

      setTodos((prevTodos)=>
  
      // eslint-disable-next-line eqeqeq
      { return  prevTodos.filter( todo => todo.key != key);});
  
    };
    const submitHandler = (text)=>{
   
      setTodos(prevTodos => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos,
        ];
      });

    }

    const submitCompleteHandler = (text)=>{
   
      setCompletedTodos(prevTodos => {
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
             <Card item={item} deleteHandler={deleteHandler} />
            )}
          />
      </View>



      <CompletedTodoCard  />
      <View style={{ alignItems:'flex-end' ,bottom:-400 , right:40 ,position:'relative' }}>
      

      
      <AddButton submitHandler={submitHandler}  submitCompleteHandler={submitCompleteHandler}/>
      
    

      </View>

     
    </SafeAreaView>
   
    
  );
};



export default App;
