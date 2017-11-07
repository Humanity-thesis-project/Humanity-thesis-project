import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';

import conf from '../config.js'

import UserProfile from './userprofile';
import OrgProfile from './orgprofile';
import List from './list';



export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     user: props.profile === 'user',
     org: props.profile === 'org',
     info: props.info,
     myEvents: props.events,
     allEvents: [],
     showEditProfile:false,  //edit profile 
     showCreateEvent:false,  //create event
     showMyEvents:false,     //my events
     showProfile: true,      //profile
     showEvents:false,       //all events
     getOut : false,  
     current: "profile" 
    };

  }

  showEditProfile(){
    this.state[this.state.current] = false ;
    this.setState({current : "showEditProfile"});
    this.setState({showEditProfile : true});
  }

  showCreateEvent(){
    this.state[this.state.current] = false ;
    this.setState({current : "showCreateEvent"});
    this.setState({showCreateEvent : true});
  }

  showMyEvents () {
    this.state[this.state.current] = false ;
    this.setState({current : "showMyEvents"});
    this.setState({showMyEvents : true});
  }

  showProfile () {
    this.state[this.state.current] = false ;
    this.setState({current : "showProfile"});
    this.setState({showProfile : true});
  }

  createEvent () {
    this.state[this.state.current] = false ;
    this.setState({current : "createEvent"});
    this.setState({createEvent : true});
  }

  showEvents () {
    fetch(conf.url + '/events',{method:'GET'})
    .then((response) => response.json())
    .then((data) => {
      console.log('-All Events---------------->')
      console.log(data) 
        this.setState({allEvents: data})
        this.state[this.state.current] = false ;
        this.setState({current : "showEvents"});
        this.setState({showEvents : true});
    })
    .catch((error) => {
      console.error(error);
     });
  }

  logout () {
      this.state[this.state.current] = false ;
      this.setState({current : "getOut"});
      this.setState({getOut : true});
    //and call some function from the sign in page ;
    if (this.state.user) {
      fetch(conf.url + '/users/signout',
        {method:'GET'})
    }
    
    if (this.state.org) {
      fetch(conf.url + '/orgs/signout',
        {method:'GET'})
    }
  }
  
  show () {
    //profile
    if (this.state.showProfile) {
      if (this.state.user) {
        return <UserProfile events={this.state.myEvents} tag = "myEvents" showEditProfile={this.showEditProfile.bind(this)} showMyEvents={this.showMyEvents.bind(this)} />
      } else if (this.state.org) {
        return <OrgProfile information = {this.state.info} events = {this.state.events} tag = "orgEvents" showEditProfile={this.showEditProfile.bind(this)} showMyEvents={this.showMyEvents.bind(this)}/>
      }
    //all events => only user
    } else if (this.state.showEvents){
      return <List events = {this.state.allEvents} tag = "allEvents"/>
    //my events =< org and user
    } else if (this.state.showMyEvents){
      return <List events = {this.state.myEvents} tag = "myEvents"/> //something to show my events
    // edit profile 
    } else if (this.state.showEditProfile) {
      return 
    //create event => org 
    } else if (this.state.showCreateEvent) {
      return ;//<create event />
    } else {
      logOut();
    } 
  }


   render() {
    if (this.state.user) {
     	return (
     		<View>
          <View
            style={{flexDirection: 'row',
              borderColor: 'black',
              borderRadius: 2,
              backgroundColor: '#00bfff'}}
          >
          <Text>             </Text>
          <TouchableOpacity style = {{marginTop: 30,alignItems:'center'}} onPress = {this.showProfile.bind(this)}>
            <Text>PROFILE</Text>
          </TouchableOpacity>
          <Text>                  </Text>
          <TouchableOpacity style = {{marginTop: 30}} onPress = {this.showEvents.bind(this)}>
                    <Text>FIND EVENTS</Text>
                  </TouchableOpacity>
                  <Text>                 </Text>
          <TouchableOpacity style = {{marginTop: 30}} onPress = {() => {this.logout.bind(this)}}>
            <Text>LOGOUT {'\n'}{'\n'}</Text>
          </TouchableOpacity>
        </View>
   		  <View>{this.show()}</View>
   		</View>

   		)
    } else if (this.state.org) {
      return (
        <View>
          <View
            style={{flexDirection: 'row',
              borderColor: 'black',
              borderRadius: 2,
              backgroundColor: '#00bfff'}}
          >
          <Text>             </Text>
          <TouchableOpacity style = {{marginTop: 30,alignItems:'center'}} onPress = {this.showProfile.bind(this)}>
            <Text>PROFILE</Text>
          </TouchableOpacity>
          <Text>                  </Text>
          <TouchableOpacity style = {{marginTop: 30}} onPress = {this.createEvent.bind(this)}>
                    <Text>CREATE EVENT</Text>
                  </TouchableOpacity>
                  <Text>                 </Text>
          <TouchableOpacity style = {{marginTop: 30}} onPress = {() => {this.logout.bind(this)}}>
            <Text>LOGOUT {'\n'}{'\n'}</Text>
          </TouchableOpacity>
        </View>
        <View>{this.show()}</View>
      </View>

      )
    } else {
      return null
    }
  }

  
}

