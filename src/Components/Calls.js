import React, {Component} from 'react';
import {View,Text} from 'react-native';

import Buttons from './Buttons';
import Call from './Call';

export default class Calls extends Component{
    render(){
        return(
            <View>
                <View>
                    <Call/>
                </View>
                <Buttons iconName="phone-plus"/>
            </View>
        )
    }
}