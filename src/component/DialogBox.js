// DialogBox.js
import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';

const DialogBox = ({ onClose }) => {
  return (
    <Modal
      transparent={true}
      visible={true}
      animationType="fade"
      onRequestClose={() => onClose(false)}
    >
      <View style={[styles.centeredView, { position: 'relative' }]}>
        <View style={styles.modalView}>
         
            <TouchableOpacity onPress={() => onClose(false)} style={{  
              
              paddingHorizontal:6,
              paddingVertical:6,
              alignItems:'center',
              borderColor:"#fca311",height: 40, justifyContent: 'center', borderRadius: 10,borderWidth:1,width:"50%" }}>
              <Text style={{color:'#14213d'}}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onClose(false)} style={{ backgroundColor: '#fca311', 
            paddingHorizontal:6,
            alignItems:'center',
            paddingVertical:6,
            height: 40, justifyContent: 'center', borderRadius: 10,marginTop:10,width:"50%" }}>
              <Text style={{color:'#14213d'}}>Start Quiz</Text>
            </TouchableOpacity>
         


          <TouchableOpacity onPress={() => onClose(false)} style={{
            position: 'absolute', right: -10, top: -10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red', height: 20, width: 20, borderRadius: 99
          }}>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>

  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: "100%",
  
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    height:150,
    width:'70%',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default DialogBox;
