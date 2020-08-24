import React, { Component } from 'react'
import { Text, View, FlatList,Image,Dimensions, ActivityIndicator } from 'react-native'

const {height,width}=Dimensions.get('window');
function rpx(px){
    return (width/750)*px
}

export default class App extends Component {

    state={res:null,refreshing:false}

    componentDidMount(){
        let url='https://api.apiopen.top/getJoke?page=1';
        fetch(url)
        .then((res)=>res.json())
        .then((resJson)=>{
            console.log(resJson);
            this.setState({res:resJson})
        })
    }

    _renderItem=({item,index})=>{
        return (
            <View style={{padding:rpx(20)}}>
                <View style={{flexDirection:'row',marginBottom:rpx(20)}}>
                    <Image source={{uri:item.header}} style={{width:rpx(100),height:rpx(100),borderRadius:rpx(50)}}/>
                    <View style={{justifyContent:'space-around',marginLeft:rpx(30),flex:1}}>
                        <Text style={{fontSize:rpx(25),color:'#000',fontWeight:'bold'}} numberOfLines={1}>{item.text}</Text>
                        <Text style={{fontSize:rpx(23),color:'#f00'}}>{item.top_comments_name}</Text>
                    </View>
                </View>
                <Image source={{uri:item.thumbnail}} style={{width,height:rpx(800)}}/>
            </View>
        )
    }

    _ItemSeparatorComponent=()=>{
        return <View style={{backgroundColor:'#f00',height:2}}></View>
    }

    _keyExtractor=(item,index)=>{
        return index+'';
    }

    _ListHeaderComponent=()=>{
        return <Text style={{fontSize:rpx(30),backgroundColor:'#f00',color:'#fff',textAlign:'center',paddingVertical:rpx(10)}}>个人主页</Text>
    }

    _ListFooterComponent=()=>{
        return (
            <View style={{flexDirection:'row',justifyContent:'center'}}>
                <ActivityIndicator /> 
                <Text style={{fontSize:rpx(20)}}>加载中...</Text>
            </View>        
        )
    }

    _onRefresh=()=>{
        this.setState({refreshing:true})
        let url='https://api.apiopen.top/getJoke?page=1';
        fetch(url)
        .then((res)=>res.json())
        .then((resJson)=>{
            console.log(resJson);
            this.setState({res:resJson,refreshing:false})
        })
    }

    curP=1;
    _onEndReached=()=>{
        let url='https://api.apiopen.top/getJoke?page=';
        fetch(url+(this.curP+1))
        .then((res)=>res.json())
        .then((resJson)=>{
            console.log(resJson);
            resJson.result=this.state.res.result.concat(resJson.result)
            this.curP++;
            this.setState({res:resJson})
        })
    }

    render() {
        if(!this.state.res) return (<View></View>)
        return (
            <FlatList data={this.state.res.result} renderItem={this._renderItem} ItemSeparatorComponent={this._ItemSeparatorComponent} keyExtractor={this._keyExtractor} ListHeaderComponent={this._ListHeaderComponent} ListFooterComponent={this._ListFooterComponent} onRefresh={this._onRefresh} refreshing={this.state.refreshing} onEndReached={this._onEndReached} onEndReachedThreshold={0.1}></FlatList>
        )
    }
}
