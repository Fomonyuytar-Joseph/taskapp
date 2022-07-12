/* eslint-disable */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {FontFamily} from '../assets/utils/Commonstyles/index'

const Header = ({headerText}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
  },
  title: {
    textAlign: 'center',
    color: '#30B0D9',
    fontSize: 30,
    
    fontFamily:FontFamily.bold
  },
});
export default Header;
