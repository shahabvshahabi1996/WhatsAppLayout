import React , { Component } from 'react';
import {View , Text , TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Header extends Component{
  render(){
    return(
      <View style={{backgroundColor : '#075e54',height : 60,justifyContent : 'center',flexDirection : 'row',alignItems : 'center'}}>
          <View style={{flex : 3,alignItems : 'flex-start',justifyContent : 'flex-start',flexDirection : 'row'}}>
            <Text style={{fontSize : 23,margin : 5, marginLeft : 15,color : '#fff'}}>{this.props.children}</Text>
          </View>
          <View style={{flex : 1,alignItems : 'flex-end',justifyContent : 'space-around',flexDirection : 'row'}}>
              <TouchableOpacity style={{margin : 5}}>
                <Icon name='search' style={{color : '#fff' , fontSize : 20}}/>
              </TouchableOpacity>
              <TouchableOpacity style={{margin : 5}}>   
                  <Icon name="ellipsis-v" style={{color : '#fff' , fontSize : 20}}/>               
              </TouchableOpacity>
          </View>
      </View>
    )
  }
}