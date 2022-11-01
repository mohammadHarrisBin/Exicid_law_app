
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ViewContext from './context/ViewContext';
import { useEffect, useState } from 'react';
import app, { auth } from './firebase.js'
import  BottomTabs  from './components/BottomTabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserContext from './context/UserContext';
import LoginPage from './pages/login';
import AuthRouter from './components/AuthRouter';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function App() {


  const [content, setContent] = useState(null);

  const [user, setUser] = useState(null)

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setUser(user)
      }else{
       setUser(null);
       signOut(auth);
      }
    })
  },[])

  return (

    <NavigationContainer>

      <UserContext.Provider value={{user, setUser}}>
      {/* pages */}
      <ViewContext.Provider value={{content, setContent}}>
         {user != null ? ( 
            <BottomTabs/>
         ):(
          <AuthRouter/>
         )}        
      </ViewContext.Provider>


      </UserContext.Provider>

    </NavigationContainer>
  );
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
