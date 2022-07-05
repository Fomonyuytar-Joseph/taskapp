/* eslint-disable */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const CompletedTodoCard = ({item}) => {
  return (
    <View style={styles.item}>
      <Text>{item.text}</Text>
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
