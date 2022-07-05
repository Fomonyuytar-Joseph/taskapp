/* eslint-disable */
import { View, Text ,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons//MaterialIcons';

const AddTodoButton = () => {
  return (
    <View  style={styles.addButtonContainer}>
    <TouchableOpacity onPress={() => setModalVisible(true)}>
      <Icon name="add-circle" size={50} color={'#30B0D9'} />
    </TouchableOpacity>
  </View>
  )
}

export default AddTodoButton