import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image,Dimensions, ScrollView} from 'react-native'

// 获取屏幕宽度
const {height, width} = Dimensions.get('window');

function rpx(px){
    return (width/750)*px
}
export default class App extends Component {
    state={res:null}
    componentDidMount(){
        let url='https://api.apiopen.top/getWangYiNews';
        fetch(url)
        .then((res)=>res.json())
        .then((resJson)=>{
            console.log(resJson);
            this.setState({res:resJson});
        })
        .catch((err)=>{console.log(err)})
    }

    showNews(){
        if(this.state.res){
            return this.state.res.result.map((item,index)=>{
                return (
                    <View key={index} style={{flexDirection:'row',padding:rpx(10),borderBottomWidth:1,borderBottomColor:'#888'}}>
                        <Image source={{uri:item.image}} style={{width:rpx(250),height:rpx(180)}} /> 
                        <View style={{marginLeft:rpx(20),justifyContent:"space-between",flex:1}}>
                           <Text style={{fontSize:rpx(30)}}>{item.title}</Text>    
                           <Text>{item.passtime}</Text>    
                        </View> 
                    </View>                               
                );
            });
        }
    }

    render() {
        return (
            <ScrollView>{this.showNews()}</ScrollView>
        )
    }
}

const styles = StyleSheet.create({})
