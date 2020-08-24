import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={{backgroundColor:'pink',height:600}}>
        <Text style={ss.one}> one </Text>
        <Text style={ss.two}> two </Text>
        <Text style={ss.threw}> threw </Text>
        <Text style={ss.four}> four </Text>
      </View>
    )
  }
}

const ss = StyleSheet.create({
  one:{
    backgroundColor:'red',
    padding:40,
    alignSelf:'flex-end'
  },
  two:{
    backgroundColor:'blue',
    padding:40,
    alignSelf:'flex-start'
  },
  threw:{
    backgroundColor:'green',
    padding:40,
    alignSelf:'center'
  },
  four:{
    backgroundColor:'gold',
    padding:40,
    alignSelf:'stretch'
  }
})
