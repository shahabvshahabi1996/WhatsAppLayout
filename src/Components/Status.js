import React, {Component} from 'react';
import {View,Text} from 'react-native';

import Buttons from './Buttons';
import EditButton from './EditButton';

export default class Status extends Component{
    render(){
        return(
            <View>
                <View style={{justifyContent : 'center',alignItems : 'flex-start'}}>
                    <Text>Status here</Text>
                </View>
                <EditButton iconName="pencil"/>
                <Buttons iconName="camera"/>
            </View>
        )
    }
}