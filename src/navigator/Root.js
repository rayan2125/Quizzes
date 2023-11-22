import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
// import Slashscreen from '../component/Slashscreen'
import Login from '../Screens/Login'
import Result from '../Screens/Results'
import Home from '../Screens/Home'


const Stack = createStackNavigator()
const Root = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        {/* <Stack.Screen name='Slashscreen' component={Slashscreen}/> */}
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Result' component={Result}/>
        <Stack.Screen name='Home' component={Home}/>
    </Stack.Navigator>
  )
}

export default Root

const styles = StyleSheet.create({})