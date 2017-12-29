import React , { Component } from 'react';
import {View , Text} from 'react-native';


import Header from './src/Components/Header';
import Tabs from './src/Components/Tabs';

export default class App extends Component{
  render(){
    return(
      <View style={{flex : 1}}>
        <Header>WhatsApp</Header>
        <View style={{flex : 1}}>
          <Tabs/>
        </View>
      </View>
    )
  }
}