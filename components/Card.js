/* eslint-disable */
import { View, Text ,TouchableOpacity ,StyleSheet } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons//MaterialIcons';



const Card = ({item ,deleteHandler ,submitCompleteHandler}) => {

  

  return (

    <View style={styles.container}>
      
      <View style={styles.radioContainer} >
   <Text>{item.text}</Text>

</View>

<View style={{flexDirection:'row' ,justifyContent:'space-evenly'}}>

<TouchableOpacity onPress={()=> deleteHandler(item.key)}>
<Icon name='delete' color={'#f70000'}size={30}  />

</TouchableOpacity  >


</View>

<TouchableOpacity onPress={()=> submitCompleteHandler(item)}>
<Icon name='delete' color={'#f70000'}size={30}  />

</TouchableOpacity  >
    </View>
  )
}

const styles = StyleSheet.create({
    radioContainer:
    {
        width:'40%'
    },
    container:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft: 25,

    },
})
export default Card