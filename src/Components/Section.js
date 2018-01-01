import React , {Component} from 'react';
import { View , Text , ScrollView } from 'react-native';

export default class Section extends Component{
    render(){
        return(
           <View style={{
           justifyContent : 'flex-start',
           alignSelf : 'stretch',
           alignItems : 'flex-start',
           marginTop : -8
           }}>
               {this.props.children}
           </View>
        )
    }
}
