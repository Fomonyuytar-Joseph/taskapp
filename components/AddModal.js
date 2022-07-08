/* eslint-disable */
import {
  View,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TextInput,
  Image,
  TouchableWithoutFeedback

} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';

import Icon from 'react-native-vector-icons//MaterialIcons';

const AddButton = ({submitHandler, modalVisible, setModalVisible ,text ,setText}) => {
  
  const [todoImage, setTodoImage] = useState(
    'https://www.pngmagic.com/product_images/solid-light-grey-background.jpg',
  );
  const [isDisplay, setIsDisplay] = useState(false);

  const photoHandler = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setTodoImage(image.path);
      setIsDisplay(true);
    });
  };
  const Message = () => {
    setIsDisplay(true);
  };
  const changeHandler = val => {
    setText(val);
  };

  return (
    <TouchableWithoutFeedback onPress={()=> keyboard.dismiss()}>
    <View>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onBackdropPress={() => setModalVisible(false)}>
        <View
          style={{
            borderRadius: 20,
            height: '60%',
            marginTop: 'auto',
            backgroundColor: '#f5f5f5',
            elevation: 5,
          }}>
          <View style={styles.container}>
            <View>
              <TextInput
                onChangeText={changeHandler}
                value={text}
                placeholder="Add Todo"
                style={styles.input}
                autoFocus={true}
              />
            </View>
          </View>

          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <Icon
                name="cancel"
                color={'red'}
                size={50}
                onPress={() => {
                  setModalVisible(false), setIsDisplay(false);
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon
                name="check-circle"
                color={'#09f700'}
                size={50}
                onPress={() => {submitHandler(text, todoImage),setModalVisible(false),setIsDisplay(false)}}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={photoHandler}>
              <Icon name="image" color={'#30B0D9'} size={50} />
            </TouchableOpacity>
          </View>

          {isDisplay && (
            <View>
              <Image
                source={{uri: todoImage}}
                style={{height: 100, width: 100}}
              />
            </View>
          )}
        </View>
      </Modal>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  container: {
    width: '100%',
    marginTop: 10,
  },
  input: {
    backgroundColor: '#F2F5FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#e8e8e8',
    marginLeft: 10,
    marginRight: 10,
  },

  addButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 400,
    marginHorizontal: 30,
    position: 'relative',
  },
});
export default AddButton;
