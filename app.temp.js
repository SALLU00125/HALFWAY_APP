import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, FlatList,Image,Pressable } from 'react-native';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styled from 'styled-components';
import { Video,AVPlaybackStatus } from 'expo-av';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomescreenText= styled.Text`
 
  font-size: 30px;
  color: red;
  text-align: center;
  padding: 10px;
  
  
`;

const ContactsList= styled.Text`
  font-size: 20px;
  color: white;
  backgroundColor:black;
  alignItems: center;
  justifyContent: center;
  
  
`;

const ImageContact=styled.Image`
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

const DATA = [
  {
    id: '1',
    title: 'First Item',
    src:require('./source/image/1.png'),
  },
  {
    id: '2',
    title: 'Second Item',
    src:require('./source/image/1.png'),
  },
  {
    id: '3',
    title: 'Third Item',
    src:require('./source/image/1.png'),
  },
];

HomeScreen = ({ navigation }) => {

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

  return (
    <>
    <View>
      <HomescreenText>GO TO DETAILS</HomescreenText>
      <Button
        title="Contacts List"
        onPress={() => navigation.navigate('Screen1')}
      />
    </View>
    
    <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
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




    </>
  );
};

Screen1 = () => {
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

Screen11 = () => {
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



export default function App() {

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

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
