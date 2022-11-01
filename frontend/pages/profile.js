import { Button, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../context/UserContext'

const ProfilePage = ({ navigation }) => {


  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (user != null) {
      navigation.navigate('home')
    }
  }, [])

  return (

    <View style={{
      height: Dimensions.get('screen').height - 200,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    }}>
      {/* <Text>{JSON.stringify(user)}</Text> */}
      {/* image */}

      {user != null ? (
          <Text>{JSON.stringify(user)}</Text>
      ): (
        <>
        <View
      style={{
        width:120,
        height:130,
        backgroundColor:'#E39774',
        borderRadius:10,
        alignItems:'center'
      }}
      >
       

        <Image source={require('../images/profile.png')} style={{
          width:150,
          height:150,
        }}/>

      </View>

      <Text style={{
        marginTop:20,
        fontWeight:'400',
        fontSize:20,
        marginBottom:50,
      }}>Please login to continue</Text>
      <View style={{
        display:'flex',
        height:80,
        justifyContent:'space-between'
      }}>

      <Button title='Login' color={'#5C9EAD'} onPress={()=>{
        navigation.navigate('login')
      }}/>
      <Button title='Register' color={'#326273'}/>

      </View>
        </>
      )}

    </View>
  )
}

export default ProfilePage

const styles = StyleSheet.create({})