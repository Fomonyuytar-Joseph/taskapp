/* eslint-disable */
import { View, Text ,TouchableOpacity ,StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons//MaterialIcons';

const AddTodoButton = ({setModalVisible}) => {
  return (
    <View  >
    <TouchableOpacity onPress={() => setModalVisible(true)}>
      <Icon name="add-circle" size={50} color={'#30B0D9'} />
    </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
 
  
    addButtonContainer: {
      flexDirection:'row',
      justifyContent:'flex-end',
      marginVertical:400,
      marginHorizontal:30,
      position:'relative',
    
      
   
    
    },
  });

export default AddTodoButton