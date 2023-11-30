import { createStackNavigator } from "@react-navigation/stack"

import Register from "../Screens/Auth/Register"
import Login from "../Screens/Auth/Login"
import Home from "../Screens/Home"



const AuthNavigator = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Register" component={Register}/>
     
    </Stack.Navigator>
  )
}

export default AuthNavigator

