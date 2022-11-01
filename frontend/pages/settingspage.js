import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Settingspage = ({navigation}) => {
  
  const {user, setUser} = useContext(UserContext);
  
  return (
    <View>
      <Text>Settingspage</Text>
      <Button color='red' title={'logout'}
      onPress={()=>{
        signOut(auth)
      }}
      />
    </View>
  )
}

export default Settingspage

const styles = StyleSheet.create({})