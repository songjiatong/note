import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import WebView from 'react-native-webview'
import AutoHeightWebView from 'react-native-autoheight-webview'

export default class App extends Component {
  data='<h1>Hello Word!</h1>'
  fun(){
    return '<h1>Hello Word!</h1>'
  }
  render() {
    return (
      // <WebView source={{uri:'http://www.bilibili.com'}}/>
      // <WebView source={{html:this.data}}/>
      // <WebView source={{html:this.fun()}}/>
      <ScrollView>
        <Text style={{fontSize:30}}>Hello!</Text>
        <Text style={{fontSize:30}}>Hello!</Text>
        <Text style={{fontSize:30}}>Hello!</Text>
        <Text style={{fontSize:30}}>Hello!</Text>
        <Text style={{fontSize:30}}>Hello!</Text>
        {/* 不能自适应剩余高度 */}
        {/* <WebView source={{uri:'http://www.bilibili.com'}} style={{height:500}} /> */}
        {/* 可以自适应屏幕剩余高度 */}
        <AutoHeightWebView source={{uri:'http://www.bilibili.com'}}/>
      </ScrollView>
    )
  }
}
