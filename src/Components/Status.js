import React, {Component} from 'react';
import {View,Text} from 'react-native';

import Buttons from './Buttons';
import EditButton from './EditButton';
import State from './State'

export default class Status extends Component{
    render(){
        return(
            <View>
                <View>
                    <State/>
                </View>
                <EditButton iconName="pencil"/>
                <Buttons iconName="camera"/>
            </View>
        )
    }
}