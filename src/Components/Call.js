import React , {Component} from 'react';
import { View , Text , ScrollView } from 'react-native';

import Section from './Section';
import CallCard from './CallCard';

var d = new Date();
var LastDate = d.getDate() + "/" + d.getMonth() + 1 + "/" + d.getFullYear();

const ChatsData = [{
    name : 'John Doe',
    incomeCall : true,
    videoCall : true,
    date : LastDate,
    times : 1
},{
    name : 'Json Robert',
    incomeCall : false,
    videoCall : false,
    date : LastDate,
    times : 4
},{
    name : 'John Elton',
    incomeCall : true,
    videoCall : false,
    date : LastDate,
    times : 8
},{
    name : 'Sam Swift',
    incomeCall : false,
    videoCall : false,
    date : LastDate,
    times : 3
},{
    name : 'Steve Jobs',
    incomeCall : true,
    videoCall : false,
    date : LastDate,
    times : 1
},{
    name : 'Mark Zakenberg',
    incomeCall : false,
    videoCall : true,
    date : LastDate,
    times : 2
},{
    name : 'Alpachino',
    incomeCall : true,
    videoCall : false,
    date : LastDate,
    times : 1
},{
    name : "Paul Radof",
    incomeCall : false,
    videoCall : true,
    date : LastDate,
    times : 1
}]

export default class Call extends Component{
    render(){
        return(
           <ScrollView>
               {ChatsData.map((user,index)=>{
                   return(
                    <Section key={index}>
                            <CallCard user={user}/>
                    </Section>     
                   )
               })}
               <View style={{height : 90}}></View>
           </ScrollView>
        )
    }
}