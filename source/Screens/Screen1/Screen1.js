import { StyleSheet, Text, View,Button, FlatList,Image,Pressable } from 'react-native';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styled from 'styled-components';


const ContactsList= styled.Text`
  font-size: 20px;
  color: white;
  backgroundColor:black;
  alignItems: center;
  justifyContent: center;
  
  
`;


const RenderView=styled.View`
  flex: 1;
  flexDirection: column;
  alignItems: center;
  justifyContent: center;
  padding: 20px;
`;

const Gapp= styled.View`
  height:100%;
`;

import Settings1 from '../Settings1/Settings1';
import DATA from '../../Data/data.js';



const Screen1 = () => {
    return (
      <>
       
  
        <Tab.Navigator>
        <Tab.Screen name="SCREEN11" component={Screen11} />
          <Tab.Screen name="setting" component={Settings1} />
         
        </Tab.Navigator>
  
      </>
    );
  };
  
  const RenderItem = ({item})=>(
    <RenderView>
     
    <ContactsList>{item.title}</ContactsList>
   
    <Image source={item.src} />
    
    </RenderView>
    
    );
  
  const Screen11 = () => {
    return (
     
      <View>
        <FlatList
          data={DATA}
          renderItem={ RenderItem }
          keyExtractor={ (item) => item.id}
        
        />
      </View>
  
       
  
    );
  };
  

  export default Screen1;