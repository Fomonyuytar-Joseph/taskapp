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

import {SafeAreaView, Text, View, FlatList, StyleSheet} from 'react-native';
import {useState} from 'react';
import AddTodoButton from './components/AddTodoButton';
// import { Provider } from 'react-redux';
// import store from './redux/store';
import {addTodo, deleteTodo, editTodo} from './redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import EditModal from './components/EditModal';

const App = () => {
  const dispatch = useDispatch();

  const {todos} = useSelector(state => state);
  console.log(todos);

  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
   const [selectedTodo, setSelectedTodo] = useState([])

  const [isEditing, setIsEditing] = useState(false);


  console.log(selectedTodo.id)
  // console.log(todos)
  // console.log(completedTodos)

  const deleteHandler = key => {
    dispatch(deleteTodo(key));
  };
  const submitHandler = text => {
    dispatch(addTodo(text));
  };

  const editHandler = (text ,id) => {

     dispatch(editTodo(text ,id))
    
  };



  // const closeEditModal = () => {
  //   setIsEditing(false);
  // };

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
        <View>
          <FlatList
            data={todos}
            keyExtractor={(item, index) => index}
            renderItem={({item, index}) => (
              <Card
                index={index}
                item={item}
                deleteHandler={deleteHandler}
                editModalVisible={editModalVisible}
                setEditModalVisible={setEditModalVisible}
                editHandler={editHandler}
                setSelectedTodo={setSelectedTodo}
                
                // submitCompleteHandler={submitCompleteHandler}
              />
            )}
          />
        </View>
      </View>

      <View>
        <EditModal
          editModalVisible={editModalVisible}
          setEditModalVisible={setEditModalVisible}
          editHandler={editHandler}
          selectedTodo={selectedTodo.id}
        />
      </View>

      <View>
        <AddButton
          submitHandler={submitHandler}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setEditModalVisible={setEditModalVisible}
        />
      </View>

      <View style={styles.addTodoContainer}>
        <AddTodoButton setModalVisible={setModalVisible} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    flex: 4,
  },
  completedContainer: {
    flex: 4,
  },
  addTodoContainer: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 19,
  },
});
export default App;
