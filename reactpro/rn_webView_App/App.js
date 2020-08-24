// In App.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import MainScreen from './views/MainScreen'
import Detail from './views/Detail'
import New from './views/NewScreen'
import NewsDetail from './views/NewsDetail';


import login from './viewspro/login';
import index from './viewspro/index';
import product from './viewspro/product';
import home from './viewspro/home';
import order from './viewspro/order';
import user from './viewspro/user';
import detail from './viewspro/detail';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='index' component={index} options={{title:'主菜单'}}/>
        <Stack.Screen name='login' component={login} options={{title:'后台管理系统'}}/>
        <Stack.Screen name='product' component={product} options={{title:'商品管理'}}/>
        <Stack.Screen name='home' component={home} options={{title:'首页管理'}}/>
        <Stack.Screen name='order' component={order} options={{title:'订单管理'}}/>
        <Stack.Screen name='user' component={user} options={{title:'用户管理'}}/>
        <Stack.Screen name='detail' component={detail} options={{title:'产品详情'}}/>
        


        <Stack.Screen name='New' component={New}  options={{title:'网易新闻'}}/>
        <Stack.Screen name='Main' component={MainScreen} options={{title:'美图浏览'}}/>
        <Stack.Screen name='Detail' component={Detail} />
        <Stack.Screen name='NewsDetail' component={NewsDetail} options={{title:'新闻详情'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;