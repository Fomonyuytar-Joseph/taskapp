/* eslint-disable */
import {View, Text, TouchableOpacity, Modal ,StyleSheet ,TextInput} from 'react-native';
import React, {useState} from 'react';
import TakeTodo from './TakeTodo';

import Icon from 'react-native-vector-icons//MaterialIcons';

const AddButton = ({submitHandler }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState('');

  const changeHandler = val => {
    setText(val);
  };

  return (
    <View>
      <Modal visible={modalVisible} animationType="slide" transparent={true}  onBackdropPress={() => setModalVisible(false)}>
        <View
          style={{
            borderRadius:20,
            height: '60%',
            marginTop: 'auto',
            backgroundColor: '#f5f5f5',
            elevation:5
          }}>
         

          <View style={styles.container}>
     <View>
      <TextInput
        onChangeText={changeHandler}
        value={text}
        placeholder='Add Todo'
        style={styles.input}
        
        
      />
      </View>
     
      
    </View>

          <View style={styles.iconContainer}>

<TouchableOpacity  >
<Icon name='cancel' color={'red'}size={50} onPress={()=> setModalVisible(false)} />
</TouchableOpacity>

<TouchableOpacity  >
<Icon name='check-circle' color={'#09f700'}size={50}  onPress={() => submitHandler(text)} />
</TouchableOpacity>

<TouchableOpacity  >
<Icon name='image' color={'#30B0D9'}size={50}  />
</TouchableOpacity>

</View>
        </View>
      </Modal>

      <TouchableOpacity onPress={() =>setModalVisible(true)}>
        <Icon name="add-circle" size={50} color={'#30B0D9'} />
        </TouchableOpacity>
    
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer:{

    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:10
 },
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

})
export default AddButton;
