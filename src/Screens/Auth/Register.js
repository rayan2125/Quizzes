import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import AuthView from '../../component/AuthView'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

const Register = () => {
    const [state, setState] = useState({
      name: '',
      email: '',
      password: '',
      phone: '',
    });
  
    useEffect(() => {
      fetchData();
    }, []); // Empty dependency array to run once on mount
  
    const fetchData = async () => {
      try {
        const userData = await AsyncStorage.getItem('UserRegister');
        if (userData !== null) {
        //   console.log("userdtata",userData)

          const { name, email, password, phone } = JSON.parse(userData);
          setState({ name, email, password, phone });
        } else {
          console.log('No data found');
        }
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
  
    const handleSubmit = async () => {
      const { name, email,phone,password } = state;
      if (!name.trim() || !email.trim() || !phone.trim()|| !password.trim()) {
        console.log('Please fill up Name and Email');
      } else {
        console.log('Fields are filled');
        try {
          await AsyncStorage.setItem('UserRegister', JSON.stringify(state));
          console.log('Successfully Registered');
        } catch (error) {
          console.log('Not saved', error);
        }
      }
    };
  
    const handleChange = (fieldName, text) => {
      setState((prevState) => ({
        ...prevState,
        [fieldName]: text,
      }));
    };
  
    return (
      <View style={styles.Container}>
        <Image
          source={require('../../assets/images/tree.png')}
          style={styles.logo}
        />
        {Object.keys(state).map((item, index) => {
          return (
            <AuthView
              key={index}
              placeholder={item}
              onChangeText={(text) => handleChange(item, text)}
            />
          );
        })}
        <TouchableOpacity
          onPress={handleSubmit}
          style={[styles.btn, { backgroundColor: '#fb6107', marginBottom: 6 }]}
        >
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Register;
  
  

const styles = StyleSheet.create({

Container:{
    flex:1,
    justifyContent:"center",
    alignItems:'center'
},
logo: {
    width: 100,
    height: 100,
    resizeMode: "contain"
  },
  btn: {
    top: 10,
    
   
    width: "70%", height: 40,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  },

})