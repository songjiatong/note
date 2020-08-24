import React, { Component } from 'react'
import { Text, View, FlatList, Dimensions,Image, ActivityIndicator } from 'react-native'

const {height,width}=Dimensions.get('window');
function rpx(px){
    return (width/750)*px
}

export default class App extends Component {

    
    state={res:null,refreshing:false}
    
    
    componentDidMount(){
        let url='https://api.apiopen.top/getWangYiNews';
        fetch(url)
        .then((res)=>res.json())
        .then((resj)=>{
            console.log(resj);
            this.setState({res:resj})
        })
    }   

    _renderItem=({item,index})=>{
        //console.log(item,index)
        return (
            <View style={{flexDirection:"row",padding:rpx(20)}}>
                <Image source={{uri:item.image}} style={{width:rpx(250),height:rpx(180)}}/>
                <View style={{marginLeft:rpx(20),justifyContent:"space-between",flex:1}}>
                    <Text style={{fontSize:rpx(30)}}>{item.title}</Text>
                    <Text>{item.passtime}</Text>
                </View>
            </View>
        )
    }

    _ItemSeparatorComponent=()=>{
        return <View style={{height:1,backgroundColor:'gray'}}></View>
    }

    _keyExtractor=(item,index)=>{
        console.log(item,index);
        return index+'';
    }

    _ListHeaderComponent=()=>{
        return <Text style={{paddingVertical:rpx(20),textAlign:'center',backgroundColor:'#0aa1ed',fontSize:rpx(30),color:'#fff'}}>新闻列表</Text>
    }

    _ListFooterComponent=()=>{
        return <View style={{flexDirection:'row',justifyContent:'center'}}>
            <ActivityIndicator />
            <Text style={{fontSize:rpx(25),marginLeft:rpx(10)}}>加载中...</Text>
        </View>
    }

    curP=1;
    _onEndReached=()=>{
        //alert('触底操作');
        let url='https://api.apiopen.top/getWangYiNews?page=';
        fetch(url+(this.curP+1))
        .then((res)=>res.json())
        .then((resj)=>{
            console.log(resj);
            resj.result=this.state.res.result.concat(resj.result)
            this.curP++;
            this.setState({res:resj})
        })
    }

    
    _onRefresh=()=>{
      this.setState({refreshing:true});
      let url='https://api.apiopen.top/getWangYiNews';
      fetch(url)
      .then((res)=>res.json())
      .then((resj)=>{
          console.log(resj);
          this.curP=1;
          this.setState({res:resj,refreshing:false})
      })
    }

    render() {
        if(!this.state.res) return (<View></View>)
        return (
            <FlatList data={this.state.res.result} renderItem={this._renderItem} ItemSeparatorComponent={this._ItemSeparatorComponent} keyExtractor={this._keyExtractor} ListHeaderComponent={this._ListHeaderComponent} ListFooterComponent={this._ListFooterComponent} onEndReached={this._onEndReached} onEndReachedThreshold={0.1} onRefresh={this._onRefresh} refreshing={this.state.refreshing}>
                <Text> textInComponent </Text>
            </FlatList>
        )
    }
}
