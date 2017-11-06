import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image} from 'react-native';
import conf from '../config.js'
import UserProfile from './userprofile';
import OrgProfile from './orgprofile';
import List from './list';
import App from '../App';

import allStyle from './style';


// const SideMenu = require('react-native-side-menu');

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     type: props.profile,
     info: props.info,
     myEvents: props.events,
     allEvents: [],
     showProfile:true,
     showOrgProfile: true,
     showEvents:false,
     getOut: false,
     editprofile:false
    };
    this.nav = <View style={{flexDirection: 'row',
    borderColor: 'black',
    borderRadius: 2,
      backgroundColor: '#00bfff'}} >
          <Text>         </Text>
          <TouchableOpacity style = {{marginTop:30,marginRight:10}} onPress = {this.goBack.bind(this)}>
            <Image source = {require('../images/back-icon.png')} style={{width: 30, height: 30}}/>
          </TouchableOpacity>
  			  <Text>       </Text>
      	<TouchableOpacity style = {{marginTop: 30,alignItems:'center'}} onPress = {this.showprofile.bind(this)}><Text>PROFILE</Text></TouchableOpacity>
      		<Text>       </Text>
      	<TouchableOpacity style = {{marginTop: 30}} onPress = {this.getEvents.bind(this)}><Text
        >FIND EVENTS</Text></TouchableOpacity>
      		<Text>       </Text>
      	<TouchableOpacity style = {{marginTop: 30}} onPress = {this.logout.bind(this)}><Text>LOGOUT {'\n'}{'\n'}</Text></TouchableOpacity>

      	</View>
 }
 goBack () {
  this.setState({showEvents: false})
  this.setState({showProfile: true})
 };

getEvents () {
  fetch(conf.url + '/events',{method:'GET'})
  .then((response) => response.json())
  .then((data) => {
    console.log('-All Events---------------->')
    console.log(data) 
      this.setState({allEvents: data})
      this.setState({showProfile: false})
      this.setState({showEvents: true})
  })
    .catch((error) => {
      console.error(error);
     });
}
 
 showprofile(){
  this.setState({showProfile: true})
  this.setState({showEvents: false})
 }
showOrgProfile(){
  this.setState({showOrgProfile: true})
  this.setState({showEvents: false})
 }

 logout(){
  fetch(conf.url + '/users/signout',
      {method:'GET'})
  this.setState({showProfile: false})
  this.setState({showEvents: false})
  this.setState({getOut: true})
 }

  orgLogout(){
  fetch(conf.url + '/orgs/signout',
      {method:'GET'})
  this.setState({showOrgProfile: false})
  this.setState({showEvents: false})
  this.setState({getOut: true})
 }

  showNav () {
    if(!this.state.getOut){
      return this.nav;
    }
    return null;
  }

  userOrOrg(){
    if(this.state.type === "user")
      return this.navb()
    else if(this.state.type === "org")
      return this.navbOrg()
  }

   navb() {
   	if(this.state.type === "user" && this.state.showProfile){
   	return  <UserProfile showEvents = {this.state.showEvents} editprofile = {this.state.editprofile}  events={this.state.myEvents} tag = "myEvents"/>
   	}else if(this.state.showEvents){
   	return  <List events = {this.state.allEvents} tag = "allEvents"/>
   	}
     if(this.state.getOut && !this.state.showProfile || !this.state.showEvents){
      return <App/>
    }
  }

  navbOrg() {
    if(this.state.type === "org" && this.state.showOrgProfile){
    return  <OrgProfile events={this.state.myEvents} tag = "myEvents"/>
    }else if(this.state.showEvents){
    return  <List events = {this.state.allEvents} tag = "allEvents"/>
    }
     if(this.state.getOut && !this.state.showProfile || !this.state.showEvents){
      return <App/>
    }
  }

 render() {
 	return (
 		<View>
    {this.showNav()}
 		<View>{this.userOrOrg()}</View>
 		</View>

 		)
  }
}
        

