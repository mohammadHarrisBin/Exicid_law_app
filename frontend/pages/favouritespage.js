import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Favouritespage = () => {


  const [favs, setFavs ] = useState([
    {
      id:1,
      title:'LAW 1',
      description: 'lorem ',
    },
    {
      id:2,
      title:'LAW 1',
      description: 'lorem ',
    },
    {
      id:3,
      title:'LAW 1',
      description: 'lorem ',
    }
  ])

  return (
    <View style={{
    width:'100%',
    display:'flex',
    // flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    // margin:10,
    }}>
      <Text>Recent favourites</Text>
      {favs.length != 0 && favs.map((fav)=>(
        
        
        <View style={{
        width:'92%',
        padding:10,
        backgroundColor:'red',
        margin:5,
        borderRadius:5,


      }}>
        <Text>first</Text>
      </View>
      ))}
      
    </View>
  )
}

export default Favouritespage

const styles = StyleSheet.create({})