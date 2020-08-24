import React, {Component} from 'react';
import {Text, View, Dimensions, Image, ScrollView} from 'react-native';
import WebView from 'react-native-webview';

const {width, height} = Dimensions.get('window');
function rpx(px) {
  return (width / 750) * px;
}

export default class detail extends Component {
  reg = (img) => {
    return img.replace(/src="/g, 'src="http://101.96.128.94:9999/');
  };
  page = 0;
  state = {res: null};

  sv = React.createRef();

  componentDidMount() {
    let url = 'http://101.96.128.94:9999/data/product/details.php?lid=';
    let lid = this.props.route.params.lid;
    fetch(url + lid)
      .then((res) => res.json())
      .then((resjson) => {
        this.setState({res: resjson.details});
        console.log(resjson);
        this.timer = setInterval(() => {
          // 操作组件: 需要关联变量到组件上
          let w = rpx(750 - 20 * 2);
          let x = (this.page + 1) * w;
          // 如果是最后一页, 则滚动到第一页
          if (this.page == this.state.res.picList.length - 1) x = 0;
          this.banner.current.scrollTo({x, y: 0});
        }, 3000);
      });
  }
  // 定时器在组件卸载时一定要关闭
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  _onScroll = (event) => {
    // event.persist(); //调用此方法 才能看到打印效果
    // console.log(event);
    let x = event.nativeEvent.contentOffset.x;
    let width = event.nativeEvent.layoutMeasurement.width;
    this.page = Math.round(x / width); //四舍五入变整数
    console.log(this.page);
  };
  // 关联组件:
  banner = React.createRef();
  render() {
    if (!this.state.res) return <View></View>;
    return (
      <ScrollView style={{padding: rpx(20), flex: 1, backgroundColor: '#fff'}}>
        <Text
          style={{
            fontSize: rpx(30),
            color: 'gray',
            borderBottomColor: 'gray',
            borderBottomWidth: rpx(2),
          }}>
          产品型号：{this.state.res.lname}
        </Text>
        <ScrollView ref={this.banner} pagingEnabled horizontal>
          {this.state.res.picList.map((item, index) => {
            return (
              <Image
                source={{uri: 'http://101.96.128.94:9999/' + item.lg}}
                style={{width, height: rpx(500)}}
                key={index}
              />
            );
          })}
        </ScrollView>
        {/* <Image  source={{uri:'http://101.96.128.94:9999/'+this.state.res.picList[0].lg}} style={{width,height:rpx(500)}}/> */}
        {/* <WebView source={{html:this.reg(this.state.res.details.details)}}></WebView> */}
      </ScrollView>
    );
  }
}
