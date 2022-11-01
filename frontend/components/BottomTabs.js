import React from 'react'
import Homepage from '../pages/homepage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Lawpage from '../pages/lawpage';
import Favouritespage from '../pages/favouritespage';
import ProfilePage from '../pages/profile';
import Settingspage from '../pages/settingspage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native';
import HomeRouter from './HomeRouter';

// const ScreenPage  = new Promise(function(res, rej){
//   if(res){

  //   function BottomTabs() {
  //     const Tab = createBottomTabNavigator();
  //     return (
  //       <Tab.Navigator>
  //          <Tab.Screen name="Home" component={Homepage} />
  //          <Tab.Screen name="Laws" component={Lawpage}/>
  //          <Tab.Screen name="Favourites" component={Favouritespage}/>
  //          <Tab.Screen name="Profile" component={ProfilePage}/>
  //          <Tab.Screen name="Settings" component={Settingspage}/>
  //       </Tab.Navigator>
  //   )
  // };


function BottomTabs() {
    const Tab = createBottomTabNavigator();

    return (
      <Tab.Navigator      
      screenOptions={({route})=>({


        tabBarBadge:'10',
        tabBarBadgeStyle:{
          backgroundColor:'#5C9EAD',
          color:'white'
        },
        tabBarActiveBackgroundColor:'#EEEEEE',

        tabBarIcon:(focused, color, size)=>{
          let iconName;
        

          if(route.name == 'Home'){
           iconName = 'home'
          }
          else if(route.name == 'Laws'){
            iconName = 'albums'
          }
          else if(route.name == 'Favourites'){
            iconName = 'bookmark'
          }
          else if(route.name == 'Profile'){
            iconName = 'person-circle'
          }
          else if(route.name == 'Settings'){
            iconName = 'settings'
          }

          return <Ionicons name={iconName} color={'#326273'} size={24}/>
        },

        tabBarActiveTintColor: '#326273',
        tabBarInactiveTintColor: 'gray',
      })}
      
      >
         <Tab.Screen options={{
          // headerShown:false
          headerTitle:'Law App - Version 1.0.0',
          headerShown:false,
          tabBarAllowFontScaling:true
         }} name="Home" component={HomeRouter}/>
         <Tab.Screen name="Laws" component={Lawpage}/>
         <Tab.Screen name="Favourites" component={Favouritespage}/>
         <Tab.Screen name="Profile" component={ProfilePage}/>
         <Tab.Screen name="Settings" component={Settingspage}/>
      </Tab.Navigator>
  )
}


export default BottomTabs