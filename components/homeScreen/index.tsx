import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native' ;
import { StatusBar } from 'expo-status-bar';


export default function HomeScreen({navigation}) {
    return(
    <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Button
        title="Go to second screen"
        onPress={()=>(navigation.navigate("RoutedPage"))}></Button>
        <StatusBar style="auto" />
    </View>
    )

}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


