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

import {SafeAreaView, Text, View, FlatList ,StyleSheet} from 'react-native';
import {useState} from 'react';
import AddTodoButton from './components/AddTodoButton';
// import { Provider } from 'react-redux';
// import store from './redux/store';
import { addTodo, deleteTodo } from './redux/actions';
import { useDispatch ,useSelector } from 'react-redux';













const App = () => {

  const dispatch = useDispatch();

  const  {todos} = useSelector(state=> state);
    console.log(todos)
 
  // const [todos, setTodos] = useState('');
  // const [completedTodos, setCompletedTodos] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  // console.log(todos)
  // console.log(completedTodos)

  const deleteHandler = key => {
    dispatch(deleteTodo(key))
  };
  const submitHandler = text => {
    dispatch(addTodo(text))
    // setTodos(prevTodos => {
    //   return [{text, key: Math.random().toString()}, ...prevTodos];
    // });
  };

  // const submitCompleteHandler = todo => {
  //   setCompletedTodos(prevTodos => {
  //     return [todo, ...prevTodos];
  //   });
  // };


  return (
      <>
      <View style={styles.todoContainer}>
      {/* Display a Header */}
      <Header headerText={'Todo App'} />

      {/* List of Todos */}
      <View >
        <FlatList
          data={todos}
          keyExtractor={(item,index)=>index}
          renderItem={({item,index}) => (
            <Card
              index = {index}
              item={item}
              deleteHandler={deleteHandler}
              // submitCompleteHandler={submitCompleteHandler}
            />
          )}
        />
      </View>
      </View>

     
      <View>
        <AddButton submitHandler={submitHandler} modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </View>

      <View style={styles.addTodoContainer}>
        <AddTodoButton setModalVisible={setModalVisible}/>
      </View>
      </>
   
  );
};

const styles= StyleSheet.create({
  todoContainer:{
    
    
    flex:4

   

  },
  completedContainer:{
    
    
    flex: 4
    

  },
   addTodoContainer:{
  
    
    flex:1.5,
    flexDirection:'row',
    justifyContent:'flex-end',
    paddingHorizontal:19

   
    
   }


})
export default App;
