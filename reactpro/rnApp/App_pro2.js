import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground,Dimensions,Image,TextInput, TouchableOpacity, StatusBar} from 'react-native'

function rpx(px){
  return (Dimensions.get('screen').width/750)*px
}


export default class App extends Component {
  url='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1038536292,1680213469&fm=26&gp=0.jpg';
  user='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1109689441,1685743679&fm=26&gp=0.jpg';
  state={showPwd:false}
  showSee(){
    if(this.state.showPwd){
      return (
        <TouchableOpacity onPress={()=>this.setState({showPwd:false})}>
              <Image source={require('./assets/air.png')} style={{marginTop:rpx(40),width:rpx(53),height:rpx(32)}}/>
            </TouchableOpacity>
      )
    }else{
      return (
        <TouchableOpacity onPress={()=>this.setState({showPwd:true})}>
              <Image source={require('./assets/nosee.png')} style={{marginTop:rpx(40),width:rpx(53),height:rpx(32)}}/>
            </TouchableOpacity>
      )
    }
  }
  render() {
    return (
      <ImageBackground source={{uri:this.url}} style={{width:"100%",height:(Dimensions.get('screen').height)}} blurRadius={1}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)"></StatusBar>
        <View style={{alignItems:'center'}}>
           <Image source={{uri:this.user}} style={{width:rpx(300),height:rpx(300),borderRadius:rpx(150),marginTop:rpx(35)}}/>
        </View>
       
        <View style={{marginHorizontal:rpx(90),marginTop:rpx(80)}}>
          <View style={{flexDirection:'row',borderBottomColor:'gray',borderBottomWidth:rpx(2)}}>
            <Image source={require('./assets/me.png')} style={{marginTop:rpx(16)}}/>
            <TextInput placeholder='请输入用户名' style={{fontSize:rpx(35),paddingBottom:rpx(50),flex:1}}/>
          </View>

          <View style={{flexDirection:'row',borderBottomColor:'gray',borderBottomWidth:rpx(2),marginTop:rpx(30)}}>
            <Image source={require('./assets/pwd.png')} style={{marginTop:rpx(16)}}/>
            <TextInput secureTextEntry={this.state.showPwd} placeholder='请输入用户名' style={{fontSize:rpx(35),paddingBottom:rpx(50),flex:1}}/>
            {this.showSee()}
          </View>
          
          <TouchableOpacity activeOpacity={0.7} style={{backgroundColor:'#aaf',alignItems:'center',padding:rpx(20),borderRadius:rpx(30),marginTop:rpx(30),marginHorizontal:rpx(30)}}>
            <Text style={{color:'#fff',fontSize:rpx(35)}}>登录</Text>
          </TouchableOpacity>

          <View style={{justifyContent:'center',flexDirection:'row'}}>
            <Text style={{fontSize:rpx(30)}}>没有账号？</Text>
            <TouchableOpacity activeOpacity={0.5}>
            <Text style={{color:'#00f',fontSize:rpx(30)}}>点击注册</Text>
          </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row',marginTop:rpx(70)}}>
            <Text style={{height:rpx(2),backgroundColor:'#000',flex:4,marginTop:rpx(15)}}></Text>
            <Text>或</Text>
            <Text style={{height:rpx(2),backgroundColor:'#000',flex:4,marginTop:rpx(15)}}></Text>
          </View>

          <View style={{flexDirection:'row',marginTop:rpx(200),justifyContent:"space-around",marginHorizontal:rpx(30)}}>
          <TouchableOpacity style={{alignItems:'center'}} activeOpacity={0.5}>
            <Image source={require('./assets/qq.png')} style={{width:rpx(60),height:rpx(60)}}/>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems:'center'}} activeOpacity={0.5}>
            <Image source={require('./assets/weibo.png')} style={{width:rpx(60),height:rpx(60)}}/>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems:'center'}} activeOpacity={0.5}>
            <Image source={require('./assets/weixin.png')} style={{width:rpx(60),height:rpx(60)}}/>
          </TouchableOpacity>
        </View>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({})
