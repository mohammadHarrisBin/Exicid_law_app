
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ViewContext from './context/ViewContext';
import { useState } from 'react';


import app from './firebase.js'

import  BottomTabs  from './components/BottomTabs';

export default function App() {

  const [content, setContent] = useState(null);

  return (

    <NavigationContainer>
      <ViewContext.Provider value={{content, setContent}}>
         <BottomTabs/>
      </ViewContext.Provider>
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
