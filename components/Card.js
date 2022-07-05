/* eslint-disable */
import { View, Text ,TouchableOpacity ,StyleSheet } from 'react-native'
import React from 'react'
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons//MaterialIcons';
import { useSelector } from 'react-redux';



const Card = ({item ,deleteHandler ,submitCompleteHandler}) => {

    const { todos }= useSelector(state=> state);
    console.log(todos)


  const data = [
    {
      label: item.text
     },
     
    ];
     

  return (

    <View style={styles.container} >

      <View style={styles.todoContainer}>
     <RadioButtonRN
    //  animationTypes={['rotate']}
  data={data}
  selectedBtn={(e) => console.log(e) }
  box={false}
  // textStyle={ textDecoration='line-through'  }
  // boxActiveBgColor='#e9dee2'
  
  icon={
    <Icon
      name="check-circle"
      size={25}
      color="#949494"
      
    />
  }
/>
</View>

<View >

<TouchableOpacity onPress={()=> deleteHandler(item.key)}>
<Icon name='delete' color={'#f70000'}size={30}  />

</TouchableOpacity  >


</View>


    </View>
  )
}

const styles = StyleSheet.create({

  container:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    marginTop:20
    
    
  },
  todoContainer:{
    width: '65%'

  },

    

    
})
export default Card