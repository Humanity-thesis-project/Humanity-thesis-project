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
     getOut: false
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

    var userProfile = <View>
      
      <View style= {{ alignItems:"center",borderColor: 'black', borderRadius: 2,backgroundColor: '#87cefa'}}>
         <Text style = {{marginTop: 20}}>Welcome {this.state.info.username}{'\n'}{'\n'}</Text>
        </View>
        <Image source={require("../images/blue.jpg")} >
        <Text style = {{marginTop: 20, marginLeft: 30,fontSize: 20,
          fontWeight: 'bold',color:'white'}}>Email:</Text>
          <Text style = {{marginTop: 20,fontSize: 20, marginLeft: 50,color:'white' }}>{this.state.info.email}</Text>

          <Text style = {{marginTop: 20, marginLeft: 30,fontSize: 20,
          fontWeight: 'bold',color:'white'}}>Rate:</Text>
          <Text style = {{marginTop: 20,color:'white',fontSize: 20, marginLeft: 50 }}>5</Text>

          <Text style = {{marginTop: 20, marginLeft: 30,fontSize: 20,
          fontWeight: 'bold',color:'white'}}>Phone Number:</Text>
          <Text style = {{marginTop: 20,color:'white',fontSize: 15, marginLeft: 50,fontSize: 20 }}>0798726360</Text>
          <View style = {{flexDirection:'row', marginTop: 50,marginLeft:30}}>
          <Button  style = {{width: 50, height: 70}} title = "Edit Profile" onPress = {this.changeEditeFlag.bind(this)}/>
           <Text>                          </Text>
          <Button style = {{width: 50, height: 70}} title = "My Events" onPress = {this.showMyEvents.bind(this)}/>
          </View>
         </Image>
        </View>

   	if(this.state.type === "user" && this.state.showProfile){
   	return  <View> userProfile <UserProfile events={this.state.myEvents} tag = "myEvents"/>
          </View>

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
        

