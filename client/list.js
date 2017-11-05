import React from "react";
import {  View, StyleSheet, Text ,TouchableOpacity, TouchableHighlight, Image} from 'react-native'
import Entryevent from './entryevent'
import EventPage from './EventPage';
import OrgProfile from './orgprofile';

export default class List extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      eventPage : -1,
      OrgID:-1
    };
  }
  
  
    render() {
        return(
            <View>
            <Image source={require("../images/blue.jpg")} >
              {this.props.events.map((event, index) => (<Entryevent key = {index} event = {event}/> ))}
              </Image>
            </View>
    )
  }
}
