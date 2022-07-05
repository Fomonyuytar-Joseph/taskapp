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

<TouchableOpacity onPress={()=>{submitCompleteHandler(item) ,deleteHandler(item.key)}}>
<Icon name='image' color={'#f70000'}size={30}  />

</TouchableOpacity  >
    </View>
  )
}

const styles = StyleSheet.create({
    radioContainer:
    {
        width:'80%'
    },
    container:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft: 25,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        marginTop: 10,
        padding: 16,

    },
})
export default Card