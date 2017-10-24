import React from "react";
import {  View, StyleSheet, Text ,TouchableOpacity, TouchableHighlight} from 'react-native'

import Entryevent from './entryevent';




export default class List extends React.Component {
  constructor(){
    super();
      this.state = {eventlist:[]};
  }


getEvents () {
   fetch('https://thawing-garden-23809.herokuapp.com/events',
    {method: 'GET'})

  .then((response) => response.json())

   .then((data) => {
    
        this.setState({eventlist: data})
        console.log(this.state.eventlist)
      })
      .catch((error) => {
        console.error(error);
      });
    }

run () {

  if(this.state.eventlist.length)
    return this.state.eventlist.map((event, index) => (<Entryevent  key = {index} event = {event} /> ))

  return <TouchableHighlight onPress = {this.getEvents.bind(this)}>
        <Text>HELLO</Text>
        </TouchableHighlight>
}



render() {
    return(
      <View>{this.run()}</View>
    )
  }
}



