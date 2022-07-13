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
import AddModal from './components/AddModal';
import Card from './components/Card';


import {View, FlatList, StyleSheet} from 'react-native';
import {useState} from 'react';
import AddTodoButton from './components/AddTodoButton';

import {addTodo, deleteTodo, editTodo} from './redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import EditModal from './components/EditModal';
import { LogBox } from 'react-native';
// import {FontFamily} from './assets/utils/Commonstyles/index'


LogBox.ignoreLogs(['source.uri should not be an empty string']); // Ignore log notification by message

const App = () => {
  const dispatch = useDispatch();

  const {todos} = useSelector(state => state);
  console.log(todos);

  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState([]);

  const [text, setText] = useState('');
  const [isDisplay, setIsDisplay] = useState(false);

  const [editText ,setEditText]= useState('')
  const [editIsDisplay, setEditIsDisplay] = useState(false);

  

  const deleteHandler = key => {
    dispatch(deleteTodo(key));
  };
  const submitHandler = (text, photoTaken) => {
    dispatch(addTodo(text, photoTaken));
    setText('')
  };

  const editHandler = (text, id, photoTaken) => {
    dispatch(editTodo(text, id, photoTaken));
    setEditText('')
  };

  return (
    <>
      <View style={styles.todoContainer}>
        {/* Display a Header */}
        <Header headerText={'Todo App'} />

        

        {/* List of Todos */}
        <View style={ { zIndex:3 } }>
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
                isDisplay={isDisplay}
                setIsDisplay={setIsDisplay}
                setEditText={setEditText}
                // todoImage={todoImage}

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
          editIsDisplay={editIsDisplay}
          setEditIsDisplay={setEditIsDisplay}
          editText={editText}
          setEditText={setEditText}
        />
      </View>

      <View >
        <AddModal
          submitHandler={submitHandler}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setEditModalVisible={setEditModalVisible}
          text={text}
          setText={setText}
          isDisplay={isDisplay}
          setIsDisplay={setIsDisplay}
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
    backgroundColor:'#e7edf0'
  },
  completedContainer: {
    flex: 4,
  },
  addTodoContainer: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 19,
    backgroundColor:'#e7edf0',
    zIndex:-1,
    
    
    
  },
});
export default App;
