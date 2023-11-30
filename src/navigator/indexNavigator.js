import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSelector } from 'react-redux'
import Login from '../Screens/Auth/Login'
import Home from '../Screens/Home'
import Slashscreen from '../component/Slashscreen'
import Register from '../Screens/Auth/Register'
import TabNavigator from './tabNavigator'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Screens/TabScreens/profile'
import Notifications from '../Screens/TabScreens/notifications'
import  Icon from 'react-native-vector-icons/FontAwesome5'
import History from '../Screens/history'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const indexNavigator = () => {
    const authData = useSelector(state=>state.auth)
    const data = authData.data
 
  return (
   <Stack.Navigator  screenOptions={{headerShown:false}} >
   <Stack.Screen name='Slashscreen' component={Slashscreen}/>
   <Stack.Screen name='Login' component={Login}/>
   <Stack.Screen name='Home' component={TabNav}/>
<Stack.Screen name='History' component={History}/>

  
   <Stack.Screen name='Register' component={Register}/>
   </Stack.Navigator>
  )
}

export default indexNavigator
export const TabNav = () => {
  return (
   <Tab.Navigator
     screenOptions={({ route }) => ({
       headerShown: false,
       tabBarLabelStyle: {
         fontSize: 12, 
         
       },
       tabBarIcon: ({ color, size }) => {
         let iconName;
 
      
         if (route.name === 'Home') {
           iconName = 'home';
         } else if (route.name === 'Notifications') {
           iconName = 'bell';
         } else if (route.name === 'Profile') {
           iconName = 'user';
         }
 
         return <Icon name={iconName} color={color} size={size} />;
       },
       tabBarActiveTintColor: '#14213d', // Change the active tab icon color
       tabBarInactiveTintColor: '#eb5e28', // Change the inactive tab icon color
       tabBarActiveBackgroundColor: '#e5e5e5', // Change the active tab background color
       tabBarInactiveBackgroundColor: 'white', // Change the inactive tab background color
       tabBarShowLabel: true, // Set to false to hide labels
     })}
   >
     <Tab.Screen
       name="Home"
       component={Home}
       options={{
         tabBarLabel: 'Home',
       }}
     />
     <Tab.Screen
       name="Notifications"
       component={Notifications}
       options={{
         tabBarLabel: 'Notifications',
       }}
     />
     <Tab.Screen
       name="Profile"
       component={Profile}
       options={{
         tabBarLabel: 'Profile',
       }}
     />
   </Tab.Navigator>
  );
 };
 
 

const styles = StyleSheet.create({})
