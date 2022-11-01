import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Acts } from "../api/sg-statutes/Acts.js"

const SearchInput = () => {

    const [text, setText] = useState('');

    const [dataset, setDataset] = useState([]);

    useEffect(() => {
        setDataset(Acts.filter((act) => {
            if (text.length > 0) {
                return act.title.includes(text);
            }
        }))
    }, [text])

    return (
        <View
            style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                // marginTop: 10
            }}
        >
            <View style={{
                width: '95%',
                // marginTop: 10

                // height:'100%'

            }}>
                {/* <Text>{text}</Text> */}
                <TextInput style={{
                    borderRadius: 5,

                    marginBottom: 5,
                    backgroundColor: 'white',
                    color: 'black',
                    fontSize: 15,
                    paddingHorizontal: 10,
                    paddingVertical: 6
                }} placeholder='Law...'

                    value={text}
                    onChangeText={prev => setText(prev)}


                ></TextInput>

                <View style={{
                    backgroundColor: 'whitesmoke',
                    padding: 2,
                    width: '100%',
                    minHeight: 20,
                    position: 'absolute',
                    top: 85,
                    zIndex: 2
                }}>

                    <ScrollView maximumZoomScale={10}

                    >
                        {dataset.length != 0 && (
                            <Text style={{
                                fontWeight: '400',
                                fontSize: 15,
                                paddingBottom: 5,
                            }}>Results</Text>
                        )}

                        {dataset.map(data => {
                            return (
                                <TouchableOpacity style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: 10,
                                    backgroundColor: '#388697',
                                    borderRadius: 5,
                                    marginBottom: 5,
                                }}>
                                    <Text style={{ color: 'white' }}>{data.title} ({data.history.length})</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>




                </View>


                <Button title={'browse'} color={'#E39774'} />


            </View>

            {/* <Input/> */}


        </View>
    )
}

export default SearchInput

const styles = StyleSheet.create({})