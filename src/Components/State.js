import React , {Component} from 'react';
import { View , Text , ScrollView ,TouchableOpacity , Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Section from './Section';
import CallCard from './CallCard';

export default class State extends Component{
    render(){
        return(
           <ScrollView>
               <Section>
                    <TouchableOpacity style={{flex : 1, flexDirection : 'row',paddingHorizontal : 10,borderTopColor: '#eee',borderTopWidth : 1,borderBottomColor: '#eee',borderBottomWidth : 1}}>
                        <View style={{flex : 1,margin : 5,marginLeft : 2,marginRight : 2,justifyContent : 'center'}}>
                            <Image source={require('../imgs/profileImage.png')} style={{width : 55 , height : 55 ,borderRadius : 50}}/>
                            <Icon name="plus-circle" style={{backgroundColor : '#fff',borderRadius : 25,padding : 0,fontSize : 25,color : '#25d366',position : 'absolute',left : 36,top : 40}}/>
                        </View>
                        <View style={{
                            flex : 5,flexDirection : 'row',
                            margin : 5,
                            padding : 10}}>
                        <View style={{flex : 1,margin : 5,justifyContent : 'center'}}>
                                <Text style={{margin : 2,fontWeight : '600' , fontSize : 14 }}>My Status</Text>
                                <Text style={{margin : 2,fontSize : 12}}>tap to add status update</Text>
                        </View>
                        </View>
                    </TouchableOpacity>
               </Section>
               <View style={{height : 90}}></View>
           </ScrollView>
        )
    }
}