/* eslint-disable */
import { View, Text ,TouchableOpacity ,StyleSheet } from 'react-native'
import React from 'react'
import RadioButtonRN from 'radio-buttons-react-native';



const Card = ({item}) => {

  
const data = [
    {
      label: item.text
     },
     
    ];
  return (

    <View>
      
      <View>
      <RadioButtonRN
  data={data}
  box={false}
  selectedBtn={(e) => console.log(e)}
/>

</View>
<Text>hi</Text>

    </View>
  )
}

export default Card