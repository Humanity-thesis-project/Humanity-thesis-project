import React from 'react';
import { StyleSheet, Text, View, TouchableHighLight, Image, Button, TouchableOpacity
} from 'react-native';
import UserEditProf from './userEditProf';
import conf from '../config.js';
import MyEvents from './myEvents';
import Navbar from './navbar';

export default class UserProfile extends React.Component {
  constructor(props) {
      super(props)
      this.state= {
        events : props.events,
        information: {},
        tag: props.tag,
        showEvents: false,
        editprofile: false
      }
  }

    goBack () {
      this.state.showEvents = false;
      this.state.editprofile = false;
    }

    changeEditeFlag () {
      this.state.showEvents = false;
      this.state.editprofile = true;
    }
    showMyEvents(){
      this.state.showEvents = true;
      this.state.editprofile = false;
    }

    editProfile(){

      fetch(conf.url + '/users/userinfo',{
        method:'GET'
      })
       .then((response) => response.json())
           .then((data) => {
            console.log('----------------->.  NEW DATA')
            console.log(data) 
              this.setState({information: data.user})
          })
            .catch((error) => {
                console.error(error);
            });
      
      if(this.state.editprofile && !this.state.showEvents){
        return <View>
          <UserEditProf/>
          <TouchableOpacity style = {{marginTop:100,marginLeft:20}} onPress = {this.goBack.bind(this)}>
            <Image source = {require("../images/back-icon.png")}/>
          </TouchableOpacity> 
          </View>;   
      }
      else if(this.state.showEvents && !this.state.editprofile){
        return <MyEvents events = {this.state.events} tag = {this.state.tag}/>
      }
    else{
      return <Navbar/>;
    }
  }
    

    render() {
    return (
      <View>
      {this.editProfile()}
      </View>
    
    );
  }

}





