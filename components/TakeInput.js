/* eslint-disable */
import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const TakeInput = () => {
  return (
    <View style={styles.container}>
     
      <TextInput
        
        placeholder='Add Todo'
        style={styles.input}
        
        
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10,
  },
  input: {
    backgroundColor: '#F2F5FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#e8e8e8',
    marginLeft: 10,
    marginRight: 10,
  },
});
export default TakeInput;
