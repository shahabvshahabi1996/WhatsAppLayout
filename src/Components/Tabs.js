import React , { Component } from 'react';
import {View , Text , ViewPagerAndroid} from 'react-native';

import Chats from './Chats';
import Calls from './Calls';
import Status from './Status';

var tabs = [{name : 'CHATS'},{name : 'STATUS'},{name : 'CALLS'}];

export default class Tabs extends Component{
    state = {
        activeIndex : 0
    }
    render(){
        return (
            <View style={{flex : 1}}>
                <View style={{flexDirection : 'row',justifyContent : 'space-around',alignItems : 'center',backgroundColor : '#075e54',height : 50}}>
                    {tabs.map((tab , index)=>{
                        if(this.state.activeIndex == index){
                            return(
                                <View key={index} style={{flex : 1,justifyContent : 'center'}}>
                                    <View>
                                        <Text style={{color : '#fff',fontSize : 15,textAlign : 'center'}}>{tab.name}</Text>
                                    </View>
                                    <View style={{marginBottom : -15,marginTop : 10,backgroundColor : '#fff',height : 5,borderBottomColor : 'rgba(0,0,0,0.15)',borderBottomWidth : 2}}></View>
                                </View>
                            )
                        }
                        else{
                            return(
                                <View key={index} style={{flex : 1,justifyContent : 'center'}}>
                                    <Text style={{color : '#fff',fontSize : 15,textAlign : 'center'}}>{tab.name}</Text>
                                </View>
                            )
                        }
                    })}
                </View>
                <ViewPagerAndroid
                style={styles.viewPager}
                onPageSelected={(event)=>{console.log(event.nativeEvent.position);this.setState({activeIndex:event.nativeEvent.position})}}
                initialPage={this.state.activeIndex}>
                    <View style={styles.pageStyle} key="1">
                        <Chats/>
                    </View>
                    <View style={styles.pageStyle} key="2">
                       <Status/>
                    </View>
                    <View style={styles.pageStyle} key="3">
                        <Calls/>
                    </View>
                </ViewPagerAndroid>
            </View>
          );
    }
}

const styles = {
    viewPager: {
      flex: 1
    },
    pageStyle: {
      padding: 0,
    }
}