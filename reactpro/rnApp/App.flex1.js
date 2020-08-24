import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={ss.box}>
        <Text style={{color:'blue',fontSize:30}}> textInComponent </Text>
        <Text style={ss.danger}>textInComponent-danget</Text>
        <Text style={[ss.success,ss.big]}>textInComponent-big</Text>
        <Text style={ss.one}>one</Text>
        <Text style={ss.two}>two</Text>
        <Text style={ss.threw}>threw</Text>
      </View>
    )
  }
}

const ss=StyleSheet.create({
  box:{
    height:500,
    backgroundColor:'brown',
    flexDirection:'column',
    //flexDirection:'row',
    justifyContent:'space-around',
    justifyContent:"space-evenly",
    //justifyContent:'flex-end',
    alignItems:'center',
  },
  danger:{
    color:'white',
    backgroundColor:'red',
  },
  success:{
    backgroundColor:'blue',
    color:'black',
  },
  big:{
    fontSize:40,
    fontWeight:'bold'
  },
  one:{
    backgroundColor:'red',
    padding:40
  },
  two:{
    backgroundColor:'rgb(0,255,0)',
    padding:40
  },
  threw:{
    backgroundColor:'#00f',
    padding:40
  }
});