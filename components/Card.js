/* eslint-disable */
import { View, Text ,TouchableOpacity , } from 'react-native'
import React from 'react'
import {BouncyCheckbox} from "react-native-bouncy-checkbox";



const Card = ({item}) => {
  return (

    <View>
      
      <Text>{item.text}</Text>

    </View>
  )
}

export default Card