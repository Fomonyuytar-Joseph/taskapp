/* eslint-disable */
import { View, Text ,TouchableOpacity ,StyleSheet } from 'react-native'
import React from 'react'
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons//MaterialIcons';




const Card = ({item ,setEditModalVisible ,editModalVisible ,editHandler}) => {

    


  const data = [
    {
      label: item.todo
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



<View>
<TouchableOpacity onPress={()=>{setEditModalVisible(true), console.log(item)}}>

<Icon name='edit' color={'#00007c'}size={30}   />

</TouchableOpacity>
</View>




<TouchableOpacity onPress={()=> deleteHandler(item.id)}>
<Icon name='delete' color={'#f70000'}size={30}  />

</TouchableOpacity  >








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