//React native / react imports
import { StyleSheet, Text, View,Button, FlatList,Image,Pressable } from 'react-native';
import * as React from 'react';


//Navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Styled components imports
import styled from 'styled-components';


//Local imports
import HomeScreen from './source/Screens/Home/HomeScreen';
import Settings1 from './source/Screens/Settings1/Settings1';
import DATA from './source/Data/data.js';
import Screen1 from './source/Screens/Screen1/Screen1';


const Stack = createNativeStackNavigator();




export default function App() {

  

  return (

    <>
  
     <NavigationContainer>
    
   
    
    <Stack.Navigator>

      <Stack.Screen name="Home" component={HomeScreen} />
  
      <Stack.Screen name="Screen1" component={Screen1} />
      
      <Stack.Screen name="Setting1" component={Settings1} />
    
    </Stack.Navigator>

  </NavigationContainer>


  </>
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
