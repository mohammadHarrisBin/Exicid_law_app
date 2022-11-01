import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ProfilePage from '../pages/profile';
import LoginPage from '../pages/login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from '../pages/homepage';
import UserContext from '../context/UserContext';

const AuthRouter = () => {

  const AuthStack = createNativeStackNavigator();
  // access user directly to authrouter
 


  return (
    <AuthStack.Navigator screenOptions={{
      headerShown:false
    }}>
        <AuthStack.Screen component={ProfilePage} name={'profile'}/>
        <AuthStack.Screen component={LoginPage} name={'login'}/>
        {/* <AuthStack.Screen component={Homepage} name={'home'}/> */}
        
    </AuthStack.Navigator>
  )
}

export default AuthRouter

const styles = StyleSheet.create({})