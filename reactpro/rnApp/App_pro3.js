import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, TextInput,TouchableOpacity } from 'react-native'

function rpx(px){
  return (Dimensions.get('screen').width/750)*px;
}

export default class App extends Component {
  render() {
    return (
      <View style={{marginHorizontal:rpx(40)}}>
        <TouchableOpacity>
          <Text style={{fontSize:rpx(40)}}>X</Text>
        </TouchableOpacity>

        <Text style={{color:'#000',fontSize:rpx(40),marginTop:rpx(100),fontWeight:'bold'}}>微信号/QQ/邮箱登录</Text>

        <View style={{marginTop:rpx(50)}}>
          <View style={{flexDirection:'row',alignItems:'center',borderBottomWidth:rpx(2),borderBottomColor:'#aaa'}}>
            <Text style={{fontSize:rpx(30)}}>账号</Text>
            <TextInput placeholder='请填写微信号/QQ号/邮箱' style={{marginLeft:rpx(100),fontSize:rpx(30),flex:1}}/>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',borderBottomWidth:rpx(2),borderBottomColor:'#aaa'}}>
            <Text style={{fontSize:rpx(30)}}>密码</Text>
            <TextInput placeholder='请填写密码' style={{marginLeft:rpx(100),fontSize:rpx(30),flex:1}}/>
          </View>

          <TouchableOpacity activeOpacity={0.7} style={{marginTop:rpx(60)}}>
            <Text style={{color:'#0aa1ed',fontSize:rpx(30)}}>用手机号登录</Text>
          </TouchableOpacity>
          
          <TouchableOpacity activeOpacity={0.7} style={{marginTop:rpx(60),backgroundColor:'green',padding:rpx(20),borderRadius:rpx(10)}}>
            <Text style={{color:'#fff',fontSize:rpx(30),textAlign:'center'}}>登录</Text>
          </TouchableOpacity>
        </View>
         
         <View style={{marginTop:rpx(570),flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:rpx(130)}}>
           <TouchableOpacity activeOpacity={0.5}>
             <Text style={{color:'#0aa1ed'}}>找回密码</Text>
           </TouchableOpacity>
           <Text style={{width:rpx(2),height:rpx(20),backgroundColor:'#0aa1ed'}}></Text>
           <TouchableOpacity activeOpacity={0.5}>
             <Text style={{color:'#0aa1ed'}}>紧急冻结</Text>
           </TouchableOpacity>
           <Text style={{width:rpx(2),height:rpx(20),backgroundColor:'#0aa1ed'}}></Text>
           <TouchableOpacity activeOpacity={0.5}>
             <Text style={{color:'#0aa1ed'}}>安全支付中心</Text>
           </TouchableOpacity>
         </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
