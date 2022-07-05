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
     
    // console.log(todos)
    // console.log(completedTodos)



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

    const submitCompleteHandler = (todo)=>{
   
      setCompletedTodos(prevTodos => {
        return [
           todo  ,
          ...prevTodos,
        ];
      });

    }


    
    
  return (
  
    <SafeAreaView>
      <Header headerText={'Todo App'}/>
     


      
      
     <View>

     <FlatList
            data={todos}
            renderItem={({ item }) => (
             <Card item={item} deleteHandler={deleteHandler} submitCompleteHandler={submitCompleteHandler} />
            )}
          />
      </View>


      <Header headerText={'Completed Todos'}/>

      <FlatList
            data={completedTodos}
            renderItem={({ item }) => (
              <CompletedTodoCard item={item} />
            )}
          />

     

      <View >
      

      
      <AddButton submitHandler={submitHandler}  />
      
    

      </View>

     
    </SafeAreaView>
   
    
  );
};



export default App;
