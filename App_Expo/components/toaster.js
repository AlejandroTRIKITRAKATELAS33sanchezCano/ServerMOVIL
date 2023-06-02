import React, {useCallback} from 'react';
import {View, Text, Image, Alert, Button, Linking, StyleSheet, TouchableOpacity} from 'react-native'
import { Entypo } from '@expo/vector-icons'; 
import Animated,{FadeInUp,FadeOutUp} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

const supportedTwitterURL = 'https://twitter.com';
const supportedFacebookURL = 'https://www.facebook.com/profile.php?id=100091645518649';
const supportedYoutubeURL = 'https://youtube.com';
const supportedInstagramURL = 'https://www.instagram.com/__gestick/?igshid=OTJhZDVkZWE%3D';

export const Toaster = ({ navigation }) => {

  const [counter, setCounter] = React.useState(60);
  const [isToasterDisplayed, setIsToasterDisplayed] = React.useState(true);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
   <Animated.View
      entering={FadeInUp}
      exiting={FadeOutUp}
      style={{
        width: "90%",
        backgroundColor: "white",
        position: "absolute",
        padding: 15,
        alignItems: "center",
        top: 50,
        left: 20,
        right: 20,
        borderRadius: 8,
        shadowOpacity: 0.55,
        shadowRadius: 4,
        elevation: 10,
      }}
    >
      <TouchableOpacity style={{alignSelf: "center"}}><Text style={{fontSize: 10}}></Text></TouchableOpacity>
      <View style={{flexDirection: "row"}}>
        <Text style={{color: 'black', fontSize: 24, alignSelf: "center"}}>{"Nuestras redes sociales"}</Text>
      </View>
      <View style={{ flexDirection:'row', flexWrap:'wrap', padding:10}}>
        <Entypo name="facebook" size={30} color="black" style={{margin:10}} onPress={() => Linking.openURL(supportedFacebookURL)}/>
        <Entypo name="instagram" size={30} color="black" style={{margin:10}} onPress={() => Linking.openURL(supportedInstagramURL)}/>
        <Entypo name="twitter" size={30} color="black" style={{margin:10}} onPress={() => Linking.openURL(supportedTwitterURL)} />
        <Entypo name="youtube" size={30} color="black" style={{margin:10}} onPress={() => Linking.openURL(supportedYoutubeURL)}/>
      </View>
    </Animated.View>
  );
};