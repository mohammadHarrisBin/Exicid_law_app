import { Button, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const ProfilePage = () => {
  
  const [user, setUser] = useState({
    email:'harris@gmail.com',
    displayName:'Harris@992',
  })
  
  return (

    <View style={{
      height:Dimensions.get('screen').height - 200,
      justifyContent:'center',
      alignItems:'center'
    }}>WQ32
      {/* image */}
      <View
      style={{
        width:120,
        height:130,
        backgroundColor:'#E39774',
        borderRadius:10,
      }}
      
      >

        <Image source={require('../images/profile.png')}/>

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

      <Button title='Login' color={'#5C9EAD'}/>
      <Button title='Register' color={'#326273'}/>

      </View>

    </View>
  )
}

export default ProfilePage

const styles = StyleSheet.create({})