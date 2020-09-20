/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

const CustomBtn = (props) =>{
  return(
    <TouchableHighlight onPress={props.onPress}>
      <Text style={styles.button}>{props.title}</Text>
    </TouchableHighlight>
  )
}

const CustomBox = (props) =>{
  return (
    <Text style={[styles.box, props.pressed ? styles.red : styles.blue]}>{props.text}</Text>
  )
}

const App = () => {
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);
  const [box4, setBox4] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.left}>
        <View style={{
            flex: 1, 
            flexDirection: 'column', 
            justifyContent: 'space-around',
            padding: 20
          }}>
          <CustomBtn title="Button1" onPress={() => setBox1(!box1)}/>
          <CustomBtn title="Button2" onPress={() => setBox2(!box2)}/>
          <CustomBtn title="Button3" onPress={() => setBox3(!box3)}/>
          <CustomBtn title="Button4" onPress={() => setBox4(!box4)}/>
        </View>
      </View>
      <View style={styles.right}>
        <View style={{
            flex: 1, 
            flexDirection: 'column', 
            justifyContent: 'space-around',
            padding: 20
          }}>
          <CustomBox text="BOX1" pressed={box1}/>
          <CustomBox text="BOX2" pressed={box2}/>
          <CustomBox text="BOX3" pressed={box3}/>
          <CustomBox text="BOX4" pressed={box4}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 6,
    flexDirection: 'row'
  },
  left:{
    flex: 0.5,
    backgroundColor: "gray"
  },
  right:{
    flex: 0.5,
    backgroundColor: "#d18060"
  },
  button:{
    borderColor: "yellow",
    borderWidth: 3,
    padding: 4,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  box:{
    flex: 0.15,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },
  red:{
    backgroundColor: "red"
  },
  blue:{
    backgroundColor: "blue"
  }
});

export default App;
