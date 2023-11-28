import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AuthView from '../../component/AuthView'
import Button from '../../component/Button/Button'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react'

const Login = ({navigation}) => {
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorEmail, setErroremail] = useState('')
  const [error, setError] = useState('')

  useEffect(()=>{
    fetchData(),
    registerData()
  },[])
  const registerData = async ()=>{
try {
  const register = await AsyncStorage.getItem("UserRegister")
  if(register !==null){
    console.log("datat",register)
  }
  else{
    console.log("not fteching data")
  }
} catch (error) {
  console.log("check where my datta is ")
}
  }
  const fetchData = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (userData !== null) {
      
        const { email, password } = JSON.parse(userData);
        
       
      } else {
    
        console.log('No data found');
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };
  

  const handleSubmit = async () => {
    let isValid = false;

    if (email === "") {
      setErroremail("Please enter Email..!");
      isValid = false;
    } else if (email !== "") {
      setErroremail("");
      isValid = true;
    }

    if (password === "") {
      setError("please Enter password..!");
      isValid = false;
    } else if (password !== "" && password.length < 6) {
      setError("please Enter min 6 characters");
      isValid = false;
    } else if (password !== "" && password.length > 5) {
      setError("");
      isValid = true; // Changed to true since this condition indicates password is valid
    }

    if (isValid) {
      try {
        await AsyncStorage.setItem('userData', JSON.stringify({ email, password }));
        console.log('Data stored successfully!');
      } catch (error) {
        console.error('Error storing data:', error);
      }
    }

    return isValid;
  };


  return (
    <View style={styles.login}>
      <Image source={require("../../assets/images/tree.png")}
        style={styles.logo}
      />
      <AuthView
        //  icon="envelope"
        onChangeText={(text) => setEmail(text)}
        placeholder="Enter Email ..."
        isvalid={error ? true : false}
      />
      <Text style={{ color: "red", left: -110 }}>{errorEmail}</Text>
      <AuthView
        //  icon="envelope"
        onChangeText={(text) => setPassword(text)}
        placeholder="Enter Password ..."
        isvalid={error ? true : false}
      />
      <Text style={{ color: "red", left: -100 }}>{error}</Text>


      <TouchableOpacity style={[styles.btn,{
         backgroundColor: "green",
      }]} onPress={()=>navigation.navigate("Register")}>
        <Text style={styles.text}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn,{
         backgroundColor: "#fb6107",
         marginBottom:6
        
      }]} onPress={handleSubmit}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  login: {
    flex: 1,
    // backgroundColor:"red",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain"
  },
  btn: {
    // top: 10,
    
   
    width: "70%", height: 40,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white",
    fontWeight: "bold"
  }
})