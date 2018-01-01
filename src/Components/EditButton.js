import React, {Component} from 'react';
import {View,Text,Dimensions, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width , height} = Dimensions.get('window');

export default class EditButton extends Component{
    render(){
        return(
                <TouchableOpacity activeOpacity={0.6} style={{height : 50,width : 50,backgroundColor : '#ece5dd',borderRadius : 50,position:'absolute',top : height - 270 , left : width - 75,justifyContent : 'center',alignItems : 'center'}}>
                    <Icon name={this.props.iconName} style={{fontSize : 20,color : '#075e54'}}/>
                </TouchableOpacity>
        )
    }
}