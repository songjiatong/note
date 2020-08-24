import React, { Component } from 'react'
import { Text, View, Dimensions,TextInput, TouchableOpacity,Image, Alert } from 'react-native'


const {width,height}=Dimensions.get('window');
function rpx(px){
  return (width/750)*px
}

export default class login extends Component {

  state={name:null,pwd:null}

  nameChanged=(e)=>{
    this.setState({name:e.nativeEvent.text})
    console.log(this.state.name)
  }

  pwdChanged=(e)=>{
    this.setState({pwd:e.nativeEvent.text})
  }


 

  login=()=>{
    let url='http://101.96.128.94:9999/data/user/login.php'
    fetch(url,{
      method:'POST',
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      },
      body:`uname=${this.state.name}&upwd=${this.state.pwd}`
    })
    .then((res)=>res.json())
    .then((resJosn)=>{
      if(resJosn.code==200){
        alert('登陆成功');
        this.props.navigation.replace('index');
      }else{
        Alert.alert('提示','用户名或密码错误，请重试')
      }
    })
  }

  render() {
    return (
      <View style={{paddingHorizontal:rpx(50)}}>
        <View style={{borderBottomWidth:rpx(2),borderBottomColor:'gray',marginTop:rpx(100)}}>
          <TextInput placeholder='请输入管理员用户名'  value={this.state.name} onChange={this.nameChanged}/>
        </View>
        <View style={{borderBottomWidth:rpx(2),borderBottomColor:'gray'}}>
          <TextInput placeholder='请输入用户登录密码' secureTextEntry value={this.state.pwd} onChange={this.pwdChanged}/>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={{backgroundColor:'#0aa1ed',padding:rpx(15),justifyContent:'center',alignItems:'center',borderRadius:rpx(5),marginTop:rpx(50)}} onPress={this.login}>
          <Text style={{fontSize:rpx(25),color:'#fff'}}>登录</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:rpx(50),alignItems:'center',marginTop:rpx(100)}}>
          <Image source={require('../assets/logo.png')} style={{width:rpx(168)*1.5,height:rpx(41)*1.5}}/>
          <Text style={{fontSize:rpx(35),color:'#0aa1ed'}}>后台管理系统</Text>
        </View>
        <Text style={{marginTop:rpx(120),textAlign:'center',color:'gray'}}>©2017版权所有，CODEBOY.COM</Text>
      </View>
    )
  }
}



















