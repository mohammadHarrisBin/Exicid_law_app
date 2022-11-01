import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ViewContext from '../context/ViewContext'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'
import * as WebBrowser from "expo-web-browser";

const getRenderLaw = async(law) =>{
    let comp_url = `https://sso.agc.gov.sg${law}`;
    let result = await WebBrowser.openBrowserAsync(comp_url);
}

const Item = ({ date,url }) => (
    <TouchableOpacity onPress={async()=>{
        await getRenderLaw(url)
        // save data to context
        
        // await func(history); 
        // navigation.navigate('view_law');
        // console.warn('hello');


    }} style={{
    backgroundColor:'#326273',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    padding:20,
    margin:10,
    }}>
        <Text style={{fontSize:20, color:'white',fontWeight:'600'}}>{date}</Text>
        <Text style={{fontSize:15, paddingTop:5, color:'#F9E784'}}>{url}</Text>
    </TouchableOpacity>
);


const ViewActPage = () => {

    const [law, setLaw] = useState(null);

    

    // useEffect(() => {
    //   getRenderLaw()
    // }, [])
    

    const renderItem = ({ item }) => (
        <Item date={item.date} url={item.url} />
    );

    const { content, setContent } = useContext(ViewContext);


    return (
        <View style={{
            width:'100%'
        }}>

            <SafeAreaView style={{
                width: '100%',
                minHeight: Dimensions.get('screen').height,

            }}>
               
                <FlatList
                    data={content}
                    renderItem={renderItem}
                    keyExtractor={item => item.date}
                />
            </SafeAreaView>

        </View>
    )
}

export default ViewActPage

const styles = StyleSheet.create({})