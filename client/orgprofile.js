import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import allStyle from './style.js';
import Createevents from './createevents';

// const styles = StyleSheet.create(allStyle.userprofile);

export default class Orgprofile extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        type : "profile",
        specific : "",
        currentMember:""
      }
  }

  currentEvent(evName) {
    this.setState({type : "current"});

    let events = this.props.orgProfile.events;

    for (var i = 0; i <  events.length; i++) {
       if(events[i].name === evName){
        this.setState({specific: events[i]})

        return ;
       }
       return null;
    }
  };

  // getUserprofile (userId){
  //   fetch('https://thawing-garden-23809.herokuapp.com/events/myevents',{
  //     method:'POST',
  //     headers:{
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //         },
  //     body:JSON.stringify({user_id:userId})
  //   })
  //   .then((response) => response.json())
  //   .then((data) => this.setState({currentMember: data ,type:"memberProfile"}))
  //   .catch((error) => {
  //     console.error(error);
  //   })
  // };

  createEvent () {
    this.setState({type:"create"})
  };

  
  deleteEvent(event){
    fetch('https://thawing-garden-23809.herokuapp.com/events/deleteevent',{
          method:'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          },
          body:JSON.stringify({event:event})
        })
        .end();
  };

  getOrgProfile (){
    const profile = 
    <View>
    <Text>Orgnization name: {this.props.orgProfile.username}</Text>{'\n'}
     
    <Text>Orgnization members : this.props.orgProfile.members.map((member, index) => (<TouchableHighlight onPress={this.getUserprofile(member.user_id)}><Text>{member.name}</Text></TouchableHighlight>))</Text>
    {'\n'}{'\n'}

    <TouchableHighlight onPress = {this.currentEvent(event.name)}>

    <Text>Orgnization events : this.props.orgProfile.events.map((event, index) => 
      (<Text>{event.name}</Text>

        <Text>{event.time}</Text>

        <TouchableHighlight onPress = {this.deleteEvent(event)}>

         <Text>Delete event</Text>

        </TouchableHighlight>
        ))</Text>

    </TouchableHighlight>
    </View>;

    if(this.state.type === "current"){
      const event = this.state.specific;

      let current = 
      <View>
        <Text>Orgnization name: {this.props.orgProfile.username}</Text>{'\n'}{'\n'}
        <Text>{event.name}</Text>
        <Text>{event.time}</Text>
        <Text>{event.location}</Text>
        <Text>{event.description}</Text>
        <Text>Event members: event.map((member,index) => (<Text>{member}</Text>))</Text>
        <TouchableHighlight onPress = {this.deleteEvent(event)}>
         <Text>Delete event</Text>
        </TouchableHighlight>
      </View>
    }
    else if(this.state.type === "create"){
      return <Createevents/>;
    }
    else if(this.state.type === "profile"){
      return profile;
    }
    else if(this.state.type === "memberProfile"){
      return
         <View>
          <Text>User name: {currentMember.username}</Text>{'\n'}{'\n'}
          <Text>{currentMember.phonNumber}</Text>
          <Text>{currentMember.email}</Text>
          <Text>{currentMember.Vote}</Text>
         </View>
    }
  }
    render() {
      return (
        <View style={styles.container}>
          {this.getOrgProfile()}
        </View>
      );
    }

  }