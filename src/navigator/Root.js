import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Slashscreen from '../component/Slashscreen'

import Result from '../Screens/Results'
import Home from '../Screens/Home'
import Login from '../Screens/Auth/Login'
import Register from '../Screens/Auth/Register'
import Quiz from '../component/Quiz'
import { useSelector } from 'react-redux'


const Stack = createNativeStackNavigator()

const Root = () => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name='Home' component={Home} />
    
      <Stack.Screen name='Quiz' component={Quiz} />

    </Stack.Navigator>
  )
}

export default Root

const styles = StyleSheet.create({})