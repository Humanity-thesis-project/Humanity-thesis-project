import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import allStyle from './style.js';

const styles = StyleSheet.create(allStyle.userprofile);

export default class Orgprofile extends React.Component {
  constructor(props) {
      super(props);
  }

  currentEvent (evName){

  };
  
  deleteEvent(){

  };

  getOrgProfile (){
    const profile = 
    <Text>Orgnization name: {this.props.orgProfile.username}</Text>

    {Orgnization members : this.props.orgProfile.members.map((member, index) => (<Text>{member.name}</Text>))}
    <TouchableHighlight onPress = {this.currentEvent(event.name)}>
    {Orgnization events : this.props.orgProfile.events.map((event, index) => 
      (<Text>{event.name}</Text>
        <Text>{event.description}</Text>
        <Text>{event.time}</Text>
        <Text>{event.description}</Text>
        <Text>{Event members: event.map((member,index) => (<Text>member</Text>))}</Text>))}
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