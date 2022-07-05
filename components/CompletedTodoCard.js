/* eslint-disable */
import {View, Text, StyleSheet ,TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons//MaterialIcons';


const CompletedTodoCard = ({item ,deleteHandler}) => {
  return (
    <View style={styles.item}>
      <Text>{item.text}</Text>
      
      <TouchableOpacity onPress={()=> deleteHandler(item.key)}>
      <Icon name='delete' color={'#f70000'}size={30}  />
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 10,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 1,
    borderRadius: 10,
    margin: 10,
  },
});
export default CompletedTodoCard;
