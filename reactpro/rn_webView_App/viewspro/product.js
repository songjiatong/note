import React, { Component } from 'react'
import { Text, View,Dimensions,Image, ActivityIndicator,TouchableOpacity ,FlatList} from 'react-native'


const {width,height}=Dimensions.get('window');
function rpx(px){
  return (width/750)*px
}

export default class product extends Component {
  
  url='http://101.96.128.94:9999/data/product/list.php?pno=';
  curP=1;

  state={res:null,refreshing:false}

  componentDidMount(){
    fetch(this.url+this.curP)
    .then((res)=>res.json())
    .then((resjson)=>{
      console.log(resjson)
      this.setState({res:resjson});
    })
  } 

  _renderItem=({item})=>{
    return (
      <TouchableOpacity style={{flexDirection:'row'}} activeOpacity={0.7} onPress={()=>this.props.navigation.push('detail',item)}>
        <Image source={{uri:'http://101.96.128.94:9999/'+item.pic}} style={{width:rpx(200),height:rpx(180)}}/>
        <View style={{flex:1,justifyContent:'center',marginLeft:rpx(20)}}>
          <Text style={{fontSize:rpx(27)}} numberOfLines={1}>{item.title}</Text>
          <Text style={{fontSize:rpx(25),color:'#f00'}}>¥{item.price}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  _ItemSeparatorComponent=()=>{
    return (
      <View style={{height:rpx(2),backgroundColor:'gray'}}></View>
    )
  }

  _keyExtractor=(item,index)=>{
    return index+'';
  }

  _onRefresh=()=>{
    this.setState({refreshing:true});
    fetch(this.url+(this.curP))
    .then((res)=>res.json())
    .then((resJson)=>{
      console.log(resJson)
      this.setState({res:resJson,refreshing:false})
      this.curP=1;
    })
  }

  _ListFooterComponent=()=>{
    if(this.state.res.pno>=this.state.res.pageCount) return <Text style={{textAlign:'center',backgroundColor:'lightgray',fontSize:rpx(30),padding:rpx(10)}}>
      没有更多数据了
    </Text>
    return (
      <View style={{flexDirection:'row',justifyContent:'center'}}>
        <ActivityIndicator />
        <Text style={{fontSize:rpx(20)}}>加载更多...</Text>
      </View>
    )
  }

  _onEndReached=()=>{
    if(this.state.res.pno>=this.state.res.pageCount) return;
    this.setState({refreshing:true})
    fetch(this.url+(this.curP+1))
    .then((res)=>res.json())
    .then((resjson)=>{
      resjson.data=this.state.res.data.concat(resjson.data);
      this.setState({res:resjson,refreshing:false});
      this.curP++;
    })
  }

  render() {
    if(!this.state.res) return <View></View>
    return (
      <FlatList style={{backgroundColor:'#fff'}} data={this.state.res.data} renderItem={this._renderItem} ItemSeparatorComponent={this._ItemSeparatorComponent} keyExtractor={this._keyExtractor} onRefresh={this._onRefresh} refreshing={this.state.refreshing} ListFooterComponent={this._ListFooterComponent} onEndReached={this._onEndReached} onEndReachedThreshold={0.1}/>
    )
  }
}
