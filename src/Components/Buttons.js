import React, {Component} from 'react';
import {View,Text,Dimensions, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width , height} = Dimensions.get('window');

export default class Buttons extends Component{
    render(){
        return(
                <TouchableOpacity activeOpacity={0.6} style={{height : 60,width : 60,backgroundColor : '#25d366',borderRadius : 50,position:'absolute',top : height - 230 , left : width - 80,justifyContent : 'center',alignItems : 'center'}}>
                    <Icon name={this.props.iconName} style={{fontSize : 25,color : '#fff'}}/>
                </TouchableOpacity>
        )
    }
}