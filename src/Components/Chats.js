import React, {Component} from 'react';
import {View,Text} from 'react-native';

import Buttons from './Buttons';
import Chat from './Chat';

export default class Chats extends Component{
    render(){
        return(
            <View>
                <View>
                   <Chat/>
                </View>
                <Buttons iconName="message-text"/>
            </View>
        )
    }
}