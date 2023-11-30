import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { Provider, useSelector } from 'react-redux'
import store from './redux/Mystore'
import IndexNavigator from './navigator/indexNavigator'
import Root from './navigator/Root'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore,   } from 'redux-persist'
import AuthNavigator from './navigator/Auth'
const App = () => {
  let persistor = persistStore(store)


  
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <NavigationContainer >
        <IndexNavigator />
       
      </NavigationContainer>
      </PersistGate>
      
    </Provider>

  )
}

export default App

const styles = StyleSheet.create({})