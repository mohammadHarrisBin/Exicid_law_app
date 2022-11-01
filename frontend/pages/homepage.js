import React, { useContext, useEffect, useState } from 'react'
import { Button, Dimensions, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-screens';
import { Acts } from "../api/sg-statutes/Acts.js"
import SearchInput from '../components/SearchInput.js';
import ViewContext from '../context/ViewContext.js';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';

const Item = ({ title, history,code, item, func, navigation }) => (


    <TouchableOpacity onPress={async()=>{
        // save data to context
        
        await func(history); 
        navigation.navigate('view_law');
        // console.warn('hello');


    }} style={{backgroundColor:'#326273',
    
    justifyContent:'center',
    // alignItems:'center',
    borderRadius:5,
    padding:20,
    margin:10,
    }}>
        <Text style={{fontSize:20, color:'white',fontWeight:'600'}}>{title} ({code?.split('/')[2]})</Text>
        <View style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        }}
        >
        <Text style={{fontSize:15, paddingTop:5, color:'#F9E784'}}>History: {history.length}</Text>
        
        {item['like'] == true ? (
            <MaterialIcons name="favorite" size={24} color="#CC2936" />
        ) : (
         <MaterialIcons name="favorite-outline" size={24} color="whitesmoke" /> 
        )}
        
        {/* <Button title='like'/> */}
        </View>
    </TouchableOpacity>
)


function Homepage({navigation}) {
    let screenHeight = Dimensions.get('screen').height;
    const [data, setData] = useState(Acts);
    const {content, setContent} = useContext(ViewContext);
   
    const renderItem = ({ item }) => (
        <Item navigation={navigation} func={setContent} item={item} title={item.title} history={item.history} code={item.url}/>
    )

    return (

        <SafeAreaView style={{
            width: '100%',
            marginTop:10,
        }}>
          
            <SearchInput/>
          
            {Acts && (
                <SafeAreaView style={{
                    width: '100%',
                    flex:1,
                    minHeight:screenHeight,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:10,
                }}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.title}

                    />
                </SafeAreaView>

            )}

            {/* {Acts && Acts.map((act) => ( */}

            {/* // ))} */}
        </SafeAreaView >
    )
    
}

export default Homepage