import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Dimensions, TouchableOpacity,Image,ActivityIndicator } from 'react-native'

const {height,width}=Dimensions.get('window');
function rpx(px){
  return (width/750)*px
}

export default class MainScreen extends Component {

  state={res:null,refreshing:false}

  componentDidMount(){
    let url='https://api.apiopen.top/getImages';
    fetch(url)
    .then((res)=>res.json())
    .then((resJson)=>{
      console.log(resJson)
      this.setState({res:resJson})
    })
  }

  _renderItem=({item,index})=>{
    return (
      <TouchableOpacity style={{width:rpx(375),height:rpx(375),marginLeft:rpx(12),marginTop:rpx(12)}} activeOpacity={0.7} onPress={()=>this.props.navigation.push('Detail',item)}>
        <Image source={{uri:item.img}} style={{width:'100%',height:'100%',borderRadius:rpx(10)}} />
      </TouchableOpacity>
    )
  }

  _keyExtractor=(item,index)=>{
    return index+'';
  }


  _onRefresh=()=>{
    this.setState({refreshing:true});
    let url='https://api.apiopen.top/getImages';
    fetch(url)
    .then((res)=>res.json())
    .then((resJson)=>{
      console.log(resJson)
      this.setState({res:resJson,refreshing:false})
    })
  }

  _onEndReached=()=>{
    let url='https://api.apiopen.top/getImages';
    fetch(url)
    .then((res)=>res.json())
    .then((resJson)=>{
      console.log(resJson)
      resJson.result=this.state.res.result.concat(resJson.result);
      this.setState({res:resJson})
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

  render() {
    if(!this.state.res) return (<View></View>)
    return (
      <FlatList data={this.state.res.result} numColumns={2} renderItem={this._renderItem}  onRefresh={this._onRefresh} refreshing={this.state.refreshing} keyExtractor={this._keyExtractor} onEndReached={this._onEndReached} onEndReachedThreshold={0.1} _ListFooterComponent={this._ListFooterComponent}/>
    )
  }
}

const styles = StyleSheet.create({})
