import React, { Component } from 'react'
import { Text, View, FlatList,Image, Dimensions } from 'react-native'

const {height,width}=Dimensions.get('window');
function rpx(px){
    return (width/750)*px
}

export default class App extends Component {

    state={res:null,refreshing:false}

    componentDidMount(){
        let url='http://meiriyikan.cn/api/json.php';
        fetch(url)
        .then((res)=>res.json())
        .then((resJson)=>{
            
            this.setState({res:resJson})
            console.log(this.state.res.news);
        })
    }

    _renderItem=({item,index})=>{
        return (
            <View style={{padding:rpx(10)}}>
                <Text style={{fontWeight:'bold',fontSize:rpx(40)}}>{item.news_title}</Text>
                <View style={{flexDirection:'row'}}>
                    <Image source={{uri:item.news_img}} style={{width:rpx(200),height:rpx(150)}}/>
                    <View style={{justifyContent:'space-around',marginLeft:rpx(20),flex:1}}>
                        <Text style={{color:'gray'}} numberOfLines={1}>{item.news_content}</Text>
                        <Text style={{color:'gray'}}>{item.news_time}</Text>
                    </View>
                </View>
            </View>
        )
    }

    _ItemSeparatorComponent=()=>{
        return <View style={{height:2,backgroundColor:'gray'}}></View>
    }

    _ListHeaderComponent=()=>{
        return (
            <View style={{backgroundColor:'#0aa1ed',padding:rpx(10)}}>
                <Text style={{fontSize:rpx(40)}}>{this.state.res.article_title}</Text>
                <Text style={{color:'#f00',fontSize:rpx(25)}}>{this.state.res.article_author}</Text>
                <Image source={{uri:this.state.res.img_url}} style={{width,height:rpx(500)}}/>
                <Text style={{textAlign:'center',color:'white',fontSize:rpx(25)}}>{this.state.res.yiyu}</Text>
            </View>
        )
    }

    _keyExtractor=(item,index)=>{
        return index+'';
    }

    _onRefresh=()=>{
        this.setState({refreshing:true})
        let url='http://meiriyikan.cn/api/json.php';
        fetch(url)
        .then((res)=>res.json())
        .then((resJson)=>{
            console.log(resJson);
            this.setState({res:resJson,refreshing:false})
        })
    }

    render() {
        if(!this.state.res) return (<View></View>)
        return (
            <FlatList data={this.state.res.news} renderItem={this._renderItem} ItemSeparatorComponent={this._ItemSeparatorComponent} ListHeaderComponent={this._ListHeaderComponent} keyExtractor={this._keyExtractor} onRefresh={this._onRefresh} refreshing={this.state.refreshing}></FlatList>
        )
    }
}
