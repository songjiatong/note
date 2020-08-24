import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground,StatusBar,TouchableOpacity, Dimensions,TextInput,Image} from 'react-native'


function rpx(px){
    return (Dimensions.get('screen').width/750)*px
  }


export default class App extends Component {
  bg="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3164705598,141356055&fm=26&gp=0.jpg";

  
  render() {
    return (
      <ImageBackground source={{uri:this.bg}} style={{width:'100%',height:(Dimensions.get('screen').height)}} blurRadius={1}>

        <StatusBar translucent backgroundColor="rgba(0,0,0,0)"/>
        <TouchableOpacity activeOpacity={0.5} style={ss.register}>
          <Text style={{color:'white',fontSize:rpx(30)}}>注册</Text>
        </TouchableOpacity>

        <View style={{paddingHorizontal:rpx(90),marginTop:rpx(150)}}>
          <View style={ss.phoneBox}>
            <Text style={{fontSize:rpx(35)}}>+86</Text>
            <View style={ss.phoneLine}></View>
            <TextInput placeholder='请输入手机号' style={{fontSize:rpx(35),flex:1}}/>
          </View>
          <View style={ss.phoneBox}>
            <TextInput placeholder='请输入密码' secureTextEntry style={{fontSize:rpx(35),paddingLeft:rpx(100)}}/>
          </View>

          <TouchableOpacity activeOpacity={0.5} style={ss.forget}>
            <Text style={{color:'gray',fontSize:rpx(30)}}>忘记密码</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.5} style={ss.login}>
            <Text style={{color:'white',fontSize:rpx(35)}}>登录</Text>
          </TouchableOpacity>
          <View style={{alignItems:'center'}}>
            <Text style={{color:'gray',fontSize:rpx(20)}}>点击登录按钮代表您已同意用户协议和隐私政策</Text>
          </View>

        </View>

        <View style={ss.thirdBox}>
          <TouchableOpacity style={{alignItems:'center'}} activeOpacity={0.5}>
            <Image source={require('./assets/qq.png')} style={{width:rpx(60),height:rpx(60)}}/>
            <Text style={{fontSize:rpx(30),color:'gray'}}>QQ登录</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems:'center'}} activeOpacity={0.5}>
            <Image source={require('./assets/weibo.png')} style={{width:rpx(60),height:rpx(60)}}/>
            <Text style={{fontSize:rpx(30),color:'gray'}}>微博登录</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems:'center'}} activeOpacity={0.5}>
            <Image source={require('./assets/weixin.png')} style={{width:rpx(60),height:rpx(60)}}/>
            <Text style={{fontSize:rpx(30),color:'gray'}}>微信登录</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
}

const ss = StyleSheet.create({
  register:{
    marginTop:rpx(40),
    marginLeft:'auto',
    marginRight:rpx(30)
  },
  phoneBox:{
    flexDirection:'row',
    alignItems:'center',
    paddingBottom:rpx(20),
    borderBottomWidth:rpx(2),
    borderBottomColor:'gray',
    marginTop:rpx(20),
  },
  phoneLine:{
    width:2,
    height:rpx(30),
    backgroundColor:'gray',
    marginHorizontal:rpx(15),
  },
  forget:{
    marginTop:rpx(40),
    marginLeft:'auto',
    alignItems:'flex-end',
  },
  login:{
    padding:8,
    borderRadius:30,
    backgroundColor:'#0aa1ed',
    marginHorizontal:rpx(60),
    alignItems:'center',
    marginTop:rpx(200)
  },
  thirdBox:{
    flexDirection:'row',
    marginTop:'auto',
    justifyContent:"space-around",
    marginBottom:rpx(100),
    marginHorizontal:rpx(100),
  }
})
