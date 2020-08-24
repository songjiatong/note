import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'

export default class App extends Component {
  url='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg';
  render() {
    return (
      <View>
        <Image source={{uri:this.url}} style={{width:400,height:200}}/>
        <Image source={require('./assets/01.jpg')} style={{width:400,height:200}}/>
      </View>
    )
  }
}
