import React, { Component } from 'react'
import { Text, View, Dimensions } from 'react-native'

function rpx(px){
  return (Dimensions.get('screen').width/750)*px;
}

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={{backgroundColor:'red',width:rpx(375)}}> textInComponent </Text>
      </View>
    )
  }
}
