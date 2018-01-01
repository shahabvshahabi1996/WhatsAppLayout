import React , {Component} from 'react';
import { View , Text , ScrollView } from 'react-native';

import Section from './Section';
import Card from './Card';

var d = new Date();
var LastDate = d.getDate() + "/" + d.getMonth() + 1 + "/" + d.getFullYear();

const ChatsData = [{
    name : 'John Doe',
    lastMassage : 'Hey How Are You??',
    date : LastDate
},{
    name : 'Json Robert',
    lastMassage : "Are You Home I'm coming",
    date : LastDate
},{
    name : 'John Elton',
    lastMassage : "have you heard my songs???",
    date : LastDate
},{
    name : 'Sam Swift',
    lastMassage : "hey you are so talented i will callin you .. :)",
    date : LastDate
},{
    name : 'Steve Jobs',
    lastMassage : "dude can you working with ReactNative??",
    date : LastDate
},{
    name : 'Mark Zakenberg',
    lastMassage : "nice to meet you",
    date : LastDate
},{
    name : 'Alpachino',
    lastMassage : "did you saw GodFather?? <3",
    date : LastDate
},{
    name : "Paul Radof",
    lastMassage : "is Telegram Running??????",
    date : LastDate
}]

export default class Chat extends Component{
    render(){
        return(
           <ScrollView>
               {ChatsData.map((user,index)=>{
                   return(
                    <Section key={index}>
                            <Card user={user}/>
                    </Section>     
                   )
               })}
               <View style={{height : 90}}></View>
           </ScrollView>
        )
    }
}