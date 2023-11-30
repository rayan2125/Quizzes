import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({textType}) => {
  return (
    <View style={{justifyContent:"center",alignItems:"center"}}>
        <TouchableOpacity style={{backgroundColor:"#fb6107",width:"70%",height:40,borderRadius:15,justifyContent:"center",alignItems:"center"}}>

      <Text style={{color:"white",fontWeight:"bold"}}>{textType}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({})