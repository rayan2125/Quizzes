import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome6"



const AuthView = ({
  placeholder,
  keyboardType,
  onChangeText,
  value,
  icon,
  isvalid
}) => {
 
  return (
    <View style={[styles.mainView,{
      borderColor: isvalid?"black":"red",
      
      borderWidth: 1,
    }]}>
      <Icon name={icon} style={{}}/> 
      <TextInput
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        style={styles.inputView}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    width: "90%",
    height: 50,
    borderRadius: 15,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  
  },
  
  inputView: {
    // Add any specific styles for the input view
  }
})

export default AuthView
