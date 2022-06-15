import { StyleSheet, Text, View,Button, FlatList,Image,Pressable } from 'react-native';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styled from 'styled-components';
import { Video,AVPlaybackStatus } from 'expo-av';
import HomeScreen from '../Home/HomeScreen';

var SettingView= styled.View`
      flex: 1 ;
      flex-direction: row;
      padding: 1%;
      background-color: ${props => props.bgColor};
`;
const SettingText = styled.Text`
      font-size: 20px;
      font-weight: bold;
      color: ${props => props.Colour};

  `;

var back_col= ['white','red','blue','black','skyblue'];


Settings1 = () => {

  
    const[bg,SetSettingBG]= React.useState(back_col[0]);
    const [TXT,setTXT]=React.useState(back_col[3]);
    const changeBG = () => {
      SetSettingBG( bg => {back_col[1]})
    };
  
    return (
      <>
      <View>
        <Text>Settings1</Text>
      </View>
  
      {/* ['white','red','blue','black']; */}
      <SettingView bgColor={bg} >
  
        <SettingText> button 1</SettingText>
        
        <Pressable onPressIn=   { ()=>
        { SetSettingBG( bg => back_col[1] );
          setTXT( TXT => back_col[0] );
        
        }
      
      }  
      
      onPressOut=  { ()=>
        { SetSettingBG( bg => back_col[0]) ;
          setTXT( TXT => back_col[3] );
          } 
      }
      
      
      onLongPress= { ()=>{
        SetSettingBG( bg => back_col[3]);
        setTXT( TXT => back_col[0] ); }
        }  >
          
        <SettingText Colour= {TXT}>ClickME</SettingText>
  
        </Pressable>
  
      </SettingView>
      </>
    );
  };



  export default Settings1