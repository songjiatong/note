import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import WebView from 'react-native-webview'

export default class NewsDetail extends Component {

  componentDidMount(){
    this.props.navigation.setOptions({
      headerRight:()=><Button title='返回上一页' onPress={()=>this.props.navigation.goBack()}/>
    })
  }

  render() {
    return (
      <WebView source={{uri:this.props.route.params.path}}/>
    )
  }
}
