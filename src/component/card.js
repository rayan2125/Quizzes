// Card.js
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';

import DialogBox from './DialogBox';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const Card = ({ stdName, nameIcon }) => {
  const navigation = useNavigation()
 
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialog = (nameIcon) => {
    if(nameIcon==="Up Coming"){

      setDialogOpen(true);
    } else if(nameIcon==="History"){
      navigation.navigate("History")
    }
  };

  const closeDialog = (value) => {
    setDialogOpen(value);
  };

  return (
    <>
      <TouchableOpacity
        onPress={()=>openDialog(nameIcon)}
        style={{
          backgroundColor: '#eb5e28',
          width: '48%',
          flex: 1,
          margin: 5,
          height: 200,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
        }}
      >
        <View
          style={{
            backgroundColor: '#e5e5e5',
            width: 100,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 99,

          }}
        >
          <Icon name={
            nameIcon === "Up Coming" ? "calendar" :
              nameIcon === "History" ? "clock" :
                nameIcon === "Notifications" ? "calendar" :
                  nameIcon === "Meetings" ? "handshake" :
                    nameIcon === "Study" ? "book" :
                      nameIcon === "Other Activities" ? "hammer" : ""}
            color="#14213d"
            size={60} />
        </View>
        <Text style={{ textAlign: 'center', fontSize: 20 }}>{stdName}</Text>


      </TouchableOpacity>

      {dialogOpen && <DialogBox onClose={closeDialog} />}
    </>
  );
};

export default Card;

const styles = StyleSheet.create({});
