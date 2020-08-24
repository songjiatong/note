import React, { Component } from 'react'
import { Text, View,Image,Dimensions,Button,TouchableOpacity,FlatList  } from 'react-native'
import { } from 'react-native-gesture-handler';

const {width,height}=Dimensions.get('window');
function rpx(px){
  return (width/750)*px
}


export default class index extends Component {

  state={
    data:[
    {title:'上架商品总数',num:'24,380',bettle:'+128%较上月',color:'#0aa1ed'},
    {title:'注册用户总数',num:'1,965',bettle:'+128%较上月',color:'#0aa1ed'},
    {title:'上架商品总数',num:'24,380',bettle:'+128%较上月',color:'#0aa1ed'},
    {title:'当日PC端PV量',num:'14,281',bettle:'+128%较上月',color:'#f00'},
    {title:'移动端PV量',num:'29,361',bettle:'+128%较上月',color:'#f00'},
    {title:'App下架总量',num:'7,322',bettle:'+128%较上月',color:'#0aa1ed'},
    {img:require('../assets/menu_product.jpg'),content:'商品管理',go:'product'},
    {img:require('../assets/menu_refresh.jpg'),content:'用户管理',go:'user'},
    {img:require('../assets/menu_user.jpg'),content:'订单管理',go:'order'},
    {img:require('../assets/menu_userlock.jpg'),content:'首页管理',go:'home'}
  ]
}

  componentDidMount(){
    this.props.navigation.setOptions({
      headerRight:()=>
        <TouchableOpacity activeOpacity={0.7}>
          <Image source={require('../assets/user.png')} style={{width:rpx(60),height:rpx(60),borderRadius:rpx(30)}}/>
        </TouchableOpacity>
    })
  }

  _renderItem=({item,index})=>{
    if(index>=6){
      return (
        <TouchableOpacity onPress={()=>this.props.navigation.push(item.go)} activeOpacity={0.7} style={{width:rpx(375),alignItems:'center',padding:rpx(20),marginTop:rpx(20)}}>
          <Image source={item.img} style={{width:rpx(100),height:rpx(100)}}/>
          <Text style={{color:item.color,fontSize:rpx(30)}}>{item.content}</Text>
        </TouchableOpacity>
      )
    }
    return (
      <View style={{width:rpx(375),borderWidth:rpx(1),borderColor:'gray',alignItems:'center',padding:rpx(20)}}>
        <Text style={{fontSize:rpx(35)}}>{item.title}</Text>
        <Text style={{color:item.color,fontSize:rpx(35)}}>{item.num}</Text>
        <Text>{item.bettle}</Text>
      </View>
    )
  }

  _keyExtractor=(item,index)=>{
    return index+'';
  }



  render() {
    return (
      <View>
        <FlatList style={{backgroundColor:'#fff'}} numColumns={2} data={this.state.data} renderItem={this._renderItem} keyExtractor={this._keyExtractor}/>
      </View>
    )
  }
}
