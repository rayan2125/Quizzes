import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { logout } from '../../redux/Reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

const Profile = ({navigation}) => {
    const dispatch = useDispatch()
    const handleLogout = async () => {
        try {
          await AsyncStorage.removeItem('userData');
          dispatch(logout()); // Reset auth data in redux state
          console.log('Logged out successfully!');
          navigation.navigate("Login")
        } catch (error) {
          console.error('Error logging out:', error);
        }
      };
  return (
    <>
    
    <View style={{flex:1,alignItems:"center"}}>
      <View>
        <View style={{height:100,width:100,borderRadius:100,backgroundColor:"#e5e5e5",justifyContent:"center",alignItems:"center"}}>
            <Text>img</Text>
        </View>
        <Text style={{color:"#14213d",fontSize:20,fontWeight:'400'}}>Ramesh Bana</Text>
        <Text style={{marginHorizontal:-20}}>bhayander East 401105</Text>
      </View>
    </View>
    <View style={{margin:5}}>
        <TouchableOpacity
        onPress={handleLogout}
        style={{ height:50,justifyContent:"center",alignItems:'center',backgroundColor:"#14213d"}}>
            
                <Text style={{color:'white'}}>Log Out</Text>
            
        </TouchableOpacity>
    </View>
    </>
  )
}

export default Profile

const styles = StyleSheet.create({})