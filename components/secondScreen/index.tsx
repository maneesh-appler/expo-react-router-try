import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, TextInput } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates'

export default function SecondScreen() {
  const [text, setText] = React.useState('');
  const [visible, setVisible] = React.useState(false)
  const onDismiss = React.useCallback(() => {
    setVisible(false)
  }, [setVisible])

  const onChange = React.useCallback(({ date }) => {
    setVisible(false)
    console.log({ date })
  }, [])

  const date = new Date()


    
  return (
    
    // <View style={styles.container}>
    //   <Text>This is second screen!</Text>
    //   <StatusBar style="auto" />

    //   <Button icon="camera">
    //     Press me
    //   </Button>

    //   <TextInput
    //     label="Email"
    //     value={text}
    //     onChangeText={text => setText(text)}
    //   />

     

    // </View>

<>
{/* <DatePickerModal
        mode="single"
        visible={visible}
        onDismiss={onDismiss}
        date={date}
        onConfirm={onChange}
        saveLabel="Save" // optional
        label="Select date" // optional
        animationType="slide" // optional, default is 'slide' on ios/android and 'none' on web
      /> */}
      <Button onPress={()=> setVisible(true)}>
        Pick date
      </Button>
</>


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
