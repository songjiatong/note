import React, { Component } from 'react'
import { Text, View, Dimensions } from 'react-native'
import { Button } from 'react-native';

function rpx(px){
  return (Dimensions.get('screen').width/750)*px;
}

export default class App extends Component {
  render() {
    return (
      <View style={{alignItems:'center'}}>
        <Text> 按钮组件</Text>
        <Button title="我是按钮" color="#841584"/>
        <Button title="不可用按钮" disabled={true}/>
        <Button title="点我" onPress={()=>{alert('lll')}}/>
      </View>
    )
  }
}
