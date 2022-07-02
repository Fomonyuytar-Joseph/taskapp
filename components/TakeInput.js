/* eslint-disable */
import {View, Text, TextInput, StyleSheet ,Button, Touchable ,TouchableOpacity} from 'react-native';
import React from 'react';
import { useState } from 'react';

const TakeInput = () => {
    const [text, setText] = useState('')

    
     

  return (
    <View style={styles.container}>
     <View>
      <TextInput
        onChange={(val) => setText(val)}
        value={text}
        placeholder='Add Todo'
        style={styles.input}
        
        
      />
      </View>
      
      <View>
        
        <TouchableOpacity>
      <Text> Add Todo</Text>
      </TouchableOpacity>

      </View>
      
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
