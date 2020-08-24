import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator, Switch,TextInput } from 'react-native'

export default class App extends Component {

    state={open:true}

    render() {
        return (
            <View style={{backgroundColor:'#aaa'}}>
                <ActivityIndicator size='large' color='red' animating={this.state.open}/>
                <Switch value={this.state.open} onValueChange={()=>{this.setState({open:!this.state.open})}}/>
                <TextInput secureTextEntry={!this.state.open} style={{borderWidth:2,margin:40,fontSize:30}} placeholder='请输入密码'/>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
