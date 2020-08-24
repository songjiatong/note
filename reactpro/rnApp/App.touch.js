import React, { Component } from 'react'
import { Text, View, ImageBackground,StatusBar, TouchableOpacity,Image,TextInput } from 'react-native'

export default class App extends Component {
  bg='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2984921529,122911325&fm=26&gp=0.jpg';
  qq='https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2252750804,1230321847&fm=26&gp=0.jpg';
  _changeText(text){
    console.log(text);
  }
  render() {
    return (
      <ImageBackground source={{uri:this.bg}} style={{width:'100%',height:'100%',alignItems:'center'}} blurRadius={0}>
        {/* <StatusBar backgroundColor='#f00' barStyle='light-content'/> */}
        {/* 穿透效果 */}
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)"/>
        <Text style={{color:'white',fontSize:50,marginTop:20}}>背景图</Text>

        <TouchableOpacity onPress={()=>{alert(111)}}>
          <Text style={{color:'white'}}>自定义按钮，有点击效果</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{alert(111)}} style={{padding:10,borderRadius:8,backgroundColor:'blue'}} activeOpacity={0.5}>
          <Text style={{color:'white'}}>自定义按钮，有点击效果</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{width:100,height:100,borderRadius:50,overflow:'hidden'}}>
          <Image source={{uri:this.qq}} style={{width:'100%',height:'100%'}}/>
        </TouchableOpacity>
        
        <TextInput onChangeText={this._changeText} placeholder='请输入用户名' secureTextEntry={true} style={{fontSize:24,borderWidth:1,width:400,borderRadius:5}}/>
      </ImageBackground>
    )
  }
}
