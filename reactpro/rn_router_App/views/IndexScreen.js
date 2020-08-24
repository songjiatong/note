import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class IndexScreen extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:50}}> Hello Word! </Text>
        <Button title='跳转到Home' onPress={()=>this.props.navigation.push('Home')}/>
        <Button title='跳转到Detail,带参数' onPress={()=>this.props.navigation.push('Detail',{name:'dingding'})}/>
      </View>
    )
  }
}
