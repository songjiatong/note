import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'

export default class Detail extends Component {


  componentDidMount(){
    // 标题栏动态变化
    this.props.navigation.setOptions({
      title:this.props.route.params.id,
    })
  }

  render() {
    return (
      <Image source={{uri:this.props.route.params.img}} style={{width:'100%',height:'100%'}}/>
    )
  }
}
