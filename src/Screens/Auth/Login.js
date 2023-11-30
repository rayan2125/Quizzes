import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AuthView from '../../component/AuthView'
import Button from '../../component/Button/Button'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAuthdata } from '../../redux/Reducers'
import { navigate } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const navigation = useNavigation()
  const authData = useSelector(state => state.auth)
  // console.log("login check data =>", authData)
  
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorEmail, setErroremail] = useState('')
  const [error, setError] = useState('')
useEffect(()=>{
fetchData()
},[])


  const fetchData = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      
      
      if (userData !== null) {
        let data= JSON.parse(userData)
        dispatch(setAuthdata(data));
        const { email, password } = JSON.parse(userData);


      } else {

        console.log('No data found');
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };
  const fetchRegister = async () => {
    try {
      const userData = await AsyncStorage.getItem('UserRegister');
      console.log(userData)
      
      if (userData !== null) {
        let data= JSON.parse(userData)
        
      


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
        dispatch(setAuthdata())
        navigation.navigate("Home")
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


      <TouchableOpacity style={[styles.btn, {
        backgroundColor: "green",
        columnGap:5,
        
      }]} onPress={() => navigation.navigate("Register")}>
        <Text style={styles.text}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, {
        backgroundColor: "#fb6107",
        marginBottom: 6,
        top:10

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