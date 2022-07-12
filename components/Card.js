/* eslint-disable */
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React , { useRef } from 'react';

import Icon from 'react-native-vector-icons//MaterialIcons';
import {useState} from 'react';
import CheckBox from './Checkbox';


const Card = ({
  item,
  setEditModalVisible,
   isDisplay,
   setIsDisplay,
  setSelectedTodo,
  deleteHandler,
  setEditText
}) => {
 
  const [task ,setTask] = useState(false)

  

  

  return (
    
    <View style={styles.container}>
      <View style={styles.todoContainer}>
       <CheckBox
       onPress={()=> setTask(!task)}
       title={item.todo}
       isChecked={task}
       
       
       
       />
      </View>

      <View style={styles.iconContainer}>
   
    <View style={{padding:5}}>
      <Image
        source={{uri: item.todoImage}}
        style={{height: 50, width: 50, borderRadius: 10}}
      />
    </View>

    
   

      <View style={{padding:5}}>

        <TouchableOpacity
          onPress={() => {
            setEditModalVisible(true), setSelectedTodo(item),setEditText(item.todo)
          }}>
          <Icon name="edit" color={'#00007c'} size={30} />
        </TouchableOpacity>
      </View>

      <View style={{padding:5}}>
      <TouchableOpacity onPress={() => deleteHandler(item.id)}>
        <Icon name="delete" color={'#f70000'} size={30} />
      </TouchableOpacity>
      </View>

      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor:'#fff',
    borderRadius:10,
    marginLeft:10,
    marginRight:10,
    paddingTop:10,
    paddingBottom: 10,
    elevation:2,
    marginBottom:5,
    zIndex:1
    
    
    },
  todoContainer: {
    width: '40%',
  },
  iconContainer:{
   flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  margin:5
  
  


  }
});
export default Card;
