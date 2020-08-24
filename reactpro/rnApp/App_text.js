import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize:20}} numberOfLines={2}>世界这么大还是遇见你，我们之间的距离。</Text>
        今日特价<Text style={{color:'red'}}>¥123.66</Text>
      </View>
    )
  }
}
