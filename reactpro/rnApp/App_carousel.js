import React, { Component } from 'react'
import { Text, StyleSheet, View,Image, ScrollView, Dimensions } from 'react-native'

// 获取屏幕宽度
const {height, width} = Dimensions.get('window');

export default class App extends Component {
    curP=0;
    
    // 状态值更新，页面才会更新
    state={res:null};

    // 掌控该元素，固定写法
    sv = React.createRef();

    // 组件生命周期，挂载：
    componentDidMount(){
        let url='https://api.apiopen.top/getImages';
        // 网络请求
        fetch(url).
        then((res)=>res.json()).
        then((resJson)=>{
            console.log(resJson);
            this.setState({res:resJson});
            // 定时器，自动滚动,
            this.timer=setInterval(()=>{
                let x=(this.curP+1)*width;
                if(this.curP==this.state.res.result.length-1) x=1;
                this.sv.current.scrollTo({x,y:0});
            },2000)
        })
        .catch((err)=>{console.log(err)})
    }

    
    //页面卸载时: 清空定时器
    componentWillUnmount(){
        clearInterval(this.timer);
    }

    showGirls(){
        if(this.state.res){
            return this.state.res.result.map((item,index)=>{
                return (<Image source={{uri:item.img}} style={{width,height:height-25}} key={index}/>);
            });
        }
    }

    _onScroll(event){
        event.persist();
        console.log(event);
        // 从第一张图片的最左边开始滚动，每次的偏移量
        let x=event.nativeEvent.contentOffset.x;
        // 每页的宽度
        let width=event.nativeEvent.layoutMeasurement.width;
        this.curP=Math.round(x/width);
    }

    render() {
        return (
        <ScrollView ref={this.sv} pagingEnabled horizontal onScroll={this._onScroll.bind(this)}>{this.showGirls()}</ScrollView>
        )
    }
}

const styles = StyleSheet.create({})
