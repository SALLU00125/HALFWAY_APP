import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, FlatList,Image,Pressable } from 'react-native';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styled from 'styled-components';
import { Video,AVPlaybackStatus } from 'expo-av';
import Settings1 from '../Settings1/Settings1';

const HomescreenText= styled.Text`
 
  font-size: 30px;
  color: red;
  text-align: center;
  padding: 10px;
  
`;

const HomeScreen = ({ navigation }) => {

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    var back_col= ['white','red','blue','black','skyblue'];
    
    const HomeUpperView = styled.View`
      flex: 0.5;
      backgroundColor: ${back_col[0]};
      `
  
    return (
      <>
      
      <View style>
        <HomescreenText>GO TO DETAILS</HomescreenText>
        <Button
          title="Contacts List"
          onPress={() => navigation.navigate('Screen1')}
        />
      </View>
      
  
      <View style={{width: '100%', height: '100%'}} >
      <Video
          ref={video}
          style={styles.video}
          source={
            require('./big_buck_bunny.mp4')
          }
          useNativeControls
          resizeMode="stretch"
          isLooping
          shouldPlay='true'
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        <View style={styles.buttons}>
          <Button
            title={status.isPlaying ? 'Pause' : 'Play'}
            onPress={() =>
              status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }
          />
        </View>
  
      </View>
  
  
      </>
    );
  };


  export default HomeScreen;


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    video: {
      alignSelf: 'center',
      width: 320,
      height: 200,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });