import React , { Component } from 'react';
import {View , Text , Image , TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Card extends Component{
    render(){
        const { user } = this.props; 
        return(
            <TouchableOpacity style={{flex : 1, flexDirection : 'row',paddingHorizontal : 10,margin : 0}}>
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
                        <View style={{flexDirection : 'row'}}>
                            <Icon name={user.incomeCall ? "arrow-bottom-left" : "arrow-top-right" } style={user.incomeCall ? {fontSize : 20,color : '#ff0000'} : {fontSize : 20,color : '#25d366'} }/>
                            <Text style={{margin : 2,fontSize : 12}}>{user.times == 1 ? user.date : "(" + user.times + ") " + user.date  }</Text>
                        </View>
                   </View>
                   <TouchableOpacity style={{margin : 5,marginVertical : 15}}>
                        <Icon name={user.videoCall ? "video" : "phone"} style={{fontSize : 25,color : '#075e54'}}/>
                   </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
    }
}

/*
    red color : "#ff0000"
    green color : "#25d366"
*/