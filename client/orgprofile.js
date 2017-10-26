import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import allStyle from './style.js';

const styles = StyleSheet.create(allStyle.userprofile);

export default class Orgprofile extends React.Component {
  constructor(props) {
      super(props);
  }

  
  deleteEvent(evName){
    fetch('https://thawing-garden-23809.herokuapp.com/orgs/deleteEvent',{
          method:'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          },
          body:JSON.stringify({eventName:evName})
        })
        .end();
  };

  getOrgProfile (){
    const profile = 
    <Text>Orgnization name: {this.props.orgProfile.username}</Text>

    {Orgnization members : this.props.orgProfile.members.map((member, index) => (<Text>{member.name}</Text>))}
    <TouchableHighlight onPress = {this.currentEvent(event.name)}>
    {Orgnization events : this.props.orgProfile.events.map((event, index) => 
      (<Text>{event.name}</Text>
        <Text>{event.time}</Text>
        <Text>{event.description}</Text>
        <Text>{Event members: event.map((member,index) => (<Text>{member}</Text>))}</Text>
        <TouchableHighlight onPress = {this.deleteEvent(event.name)}>
         <Text>Delete event</Text>
        </TouchableHighlight>
        ))}
    </TouchableHighlight>

    if(this.props.orgProfile){
      return profile;
    }
    return null;
  }
    render() {
      return (
        <View style={styles.container}>
          {this.getOrgProfile()}
        </View>
      );
    }
}