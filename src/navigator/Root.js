import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
// import Slashscreen from '../component/Slashscreen'

import Result from '../Screens/Results'
import Home from '../Screens/Home'
import Login from '../Screens/Auth/Login'
import Register from '../Screens/Auth/Register'


const Stack = createStackNavigator()
const Root = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        {/* <Stack.Screen name='Slashscreen' component={Slashscreen}/> */}
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Result' component={Result}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Register' component={Register}/>
    </Stack.Navigator>
  )
}

export default Root

const styles = StyleSheet.create({})