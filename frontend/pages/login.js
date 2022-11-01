import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import UserContext from '../context/UserContext';

const LoginPage = ({navigation}) => {
  
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null)

    // userContext -> value -> {user, setUser}
    // login -> user information -> save user information(login credentials) -> store in context -> 
    // -> check user != null -> redirect to homepage 

    const {user, setUser} = useContext(UserContext)
    
    const handleLoginUser = async() => {
        await signInWithEmailAndPassword(auth,email, password).then((user)=>{
            setUser(user);
        })
    }

    useEffect(()=>{
        if(user != null){
            navigation.navigate('profile')
        }
    },[user])


  
    return (
    <View>
      <Text>Login</Text>
      
      <Text>{JSON.stringify(password)}</Text>

      <TextInput placeholder='Email...' value={email} onChangeText={(value)=>{
        setEmail(value)
      }}/>

      <TextInput placeholder='password...'  value={password} onChangeText={(value)=>{
        setPassword(value)
      }}
      />
      
      {/* <TextInput placeholder='repeat password...' /> */}



      <Button title='Login' color={'#5C9EAD'} onPress={()=>{
        handleLoginUser();
      }}/>
      <Button title='Register' color={'#326273'} onPress={()=>{
        navigation.navigate('register')
      }}/>
    
    </View>
  )
}

export default LoginPage

const styles = StyleSheet.create({})