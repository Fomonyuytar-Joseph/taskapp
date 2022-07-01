/* eslint-disable */
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import TakeTodo from './TakeTodo';
import {connect} from 'react-redux'
import { makeVisible ,unVisible } from '../store/actions/rootActions';


import Icon from 'react-native-vector-icons/AntDesign';

const AddButton = ({visibility}) => {
  
  return (
    <View>
      <Modal visible={visibility(false)} animationType="slide" transparent={true}>
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
            //onPress={() => setModalVisible(false)}
          
          />

          <TakeTodo />
        </View>
      </Modal>

      <TouchableOpacity onPress={() => visibility(true)}>
        <Icon name="pluscircle" size={50} color={'#30B0D9'} />
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps =(state)=>{

  console.log(state)
  return {
     visibility : state.mymodalVisible
  }
}

export default connect(mapStateToProps ,{makeVisible ,unVisible}) (AddButton);
