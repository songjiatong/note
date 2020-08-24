import React, { Component } from 'react'
import { Text, View,FlatList,Dimensions, TouchableOpacity,Image, ActivityIndicator} from 'react-native'


const {height,width}=Dimensions.get('window');
function rpx(px){
  return (width/750)*px
}

export default class NewScreen extends Component {

  state={res:null,refreshing:false}; 
  url='https://api.apiopen.top/getWangYiNews?page=';

  curp=1;
  componentDidMount(){
    
    fetch(this.url+this.curp)
    .then((res)=>res.json())
    .then((resJson)=>{
      console.log(resJson)
      this.setState({res:resJson})
    })
  }

  _renderItem=({item})=>{
    return(
      <TouchableOpacity style={{width:rpx(375),padding:rpx(10)}} activeOpacity={0.7} onPress={()=>this.props.navigation.push('NewsDetail',item)}>
        <Image source={{uri:item.image}} style={{width:'100%',height:rpx(250)}}/>
        <View style={{flex:1,justifyContent:'space-around'}}>
          <Text>{item.title}</Text>
          <Text>{item.passtime}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  _keyExtractor=(item,index)=>{
    return index+'';
  }

  _onRefresh=()=>{
    this.setState({refreshing:true});
    fetch(this.url+this.curp)
    .then((res)=>res.json())
    .then((resJson)=>{
      console.log(resJson)
      this.setState({res:resJson,refreshing:false})
    })
  }

  _onEndReached=()=>{
    fetch(this.url+(this.curp+1))
    .then((res)=>res.json())
    .then((resJson)=>{
      console.log(resJson)
      resJson.result=this.state.res.result.concat(resJson.result);
      this.setState({res:resJson,refreshing:false})
      this.curp++;
    })
  }

  _ListFooterComponent=()=>{
    return (
      <View style={{flexDirection:'row',justifyContent:'center'}}>
        <ActivityIndicator />
        <Text style={{fontSize:rpx(20)}}>加载中...</Text>
      </View>
    )
  }

  _ItemSeparatorComponent=()=>{
    return (
      <View style={{backgroundColor:'gray',height:rpx(2)}}></View>
    )
  }



  render() {
    if(!this.state.res) return (<View></View>)
    return (
      <FlatList ItemSeparatorComponent={this._ItemSeparatorComponent} numColumns={2} data={this.state.res.result} renderItem={this._renderItem} keyExtractor={this._keyExtractor} onRefresh={this._onRefresh} refreshing={this.state.refreshing} onEndReached={this._onEndReached} onEndReachedThreshold={0.1} ListFooterComponent={this._ListFooterComponent}/>
    )
  }
}
