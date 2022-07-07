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
import AddButton from './components/AddModal';
import Card from './components/Card';


import {View, FlatList, StyleSheet} from 'react-native';
import {useState} from 'react';
import AddTodoButton from './components/AddTodoButton';

import {addTodo, deleteTodo, editTodo} from './redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import EditModal from './components/EditModal';

const App = () => {
  const dispatch = useDispatch();

  const {todos} = useSelector(state => state);
  console.log(todos);

  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState([]);

  const deleteHandler = key => {
    dispatch(deleteTodo(key));
  };
  const submitHandler = (text, photoTaken) => {
    dispatch(addTodo(text, photoTaken));
  };

  const editHandler = (text, id, photoTaken) => {
    dispatch(editTodo(text, id, photoTaken));
  };

  return (
    <>
      <View style={styles.todoContainer}>
        {/* Display a Header */}
        <Header headerText={'Todo App'} />

        <View></View>

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
