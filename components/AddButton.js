/* eslint-disable */
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import TakeTodo from './TakeTodo';

import Icon from 'react-native-vector-icons/AntDesign';

const AddButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View
          style={{
            borderRadius:20,
            height: '60%',
            marginTop: 'auto',
            backgroundColor: '#f5f5f5',
            elevation:5
          }}>
          <Icon
            name="close"
            size={20}
            color={'#30B0D9'}
            onPress={() => setModalVisible(false)}
          />

          <TakeTodo />
        </View>
      </Modal>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Icon name="pluscircle" size={50} color={'#30B0D9'} />
      </TouchableOpacity>
    </View>
  );
};

export default AddButton;
