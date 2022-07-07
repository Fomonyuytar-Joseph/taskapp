/* eslint-disable */
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons//MaterialIcons';
import { useState } from 'react';

const Card = ({
  item,
  setEditModalVisible,
 
  setSelectedTodo,
  deleteHandler,
 

}) => {

  const [isActive, setIsActive] = useState(false);
  
  const data = [
    {
      label: item.todo,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.todoContainer}>
        <RadioButtonRN
          //  animationTypes={['rotate']}
          data={data}
          selectedBtn={e => setIsActive(true)}
          box={false}
          // textStyle={ textDecoration='line-through'  }
          // boxActiveBgColor='#e9dee2'

          icon={<Icon name="check-circle" size={25} color="#949494" />}
         textStyle={{textDecorationLine: isActive ? 'line-through' : '', 
         textDecorationStyle:isActive ?  'solid' :''}}

          
        />
      </View>

      <View>
        <Image  source={{uri: item.todoImage}}
              style={{height: 100, width: 100 ,borderRadius:10}} />
      </View>

      <View>
        <TouchableOpacity
          onPress={() => {
            setEditModalVisible(true), setSelectedTodo(item);
          }}>
          <Icon name="edit" color={'#00007c'} size={30} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => deleteHandler(item.id)}>
        <Icon name="delete" color={'#f70000'} size={30} />
      </TouchableOpacity>

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
    
  },
  todoContainer: {
    width: '40%',
    
    
    
  },
});
export default Card;
