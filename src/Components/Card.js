import React , { Component } from 'react';
import {View , Text , Image , TouchableOpacity} from 'react-native';

export default class Card extends Component{
    render(){
        const { user } = this.props; 
        return(
            <TouchableOpacity style={{flex : 1, flexDirection : 'row',paddingHorizontal : 10}}>
                <View style={{flex : 1,margin : 5,marginLeft : 2,marginRight : 2,justifyContent : 'center'}}>
                    <Image source={require('../imgs/profileImage.png')} style={{width : 55 , height : 55 ,borderRadius : 50}}/>
                </View>
                <View style={{
                    flex : 5,flexDirection : 'row',
                    margin : 5,
                    padding : 10,
                    borderTopColor : '#eee', 
                    borderTopWidth : 1}}>
                   <View style={{flex : 1,margin : 5,justifyContent : 'center'}}>
                        <Text style={{margin : 2,fontWeight : '600' , fontSize : 14 }}>{user.name}</Text>
                        <Text style={{margin : 2,fontSize : 12}}>{user.lastMassage}</Text>
                   </View>
                   <View style={{margin : 2,marginVertical : 5}}>
                        <Text style={{fontSize : 10}}>{user.date}</Text>
                   </View>
                </View>
            </TouchableOpacity>
        )
    }
}