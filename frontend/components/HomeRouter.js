import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Homepage from '../pages/homepage';
import ViewActPage from '../pages/viewActPage';

const HomeRouter = () => {

    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{
        headerShown:true,
        
    }}>
        <Stack.Screen component={Homepage} name={'home'}/>
        <Stack.Screen 
        options={{
            headerTitle:'Past Histories'
        }}
        component={ViewActPage} name={'view_law'}/>

    </Stack.Navigator>
  )
}

export default HomeRouter

const styles = StyleSheet.create({})