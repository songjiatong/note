import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class DetailScreen extends Component {

  componentDidMount(){
    // 标题栏动态变化
    let name=this.props.route.params.name;
    this.props.navigation.setOptions({
      title:name,
      headerRight:()=> <Button title='返回上一页' onPress={()=>this.props.navigation.goBack()}/>
    })
  }

  render() {
    return (
      <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:30}}> 详情页 </Text>
        <Text>传入的参数{this.props.route.params.name}</Text>
      </View>
    )
  }
}
