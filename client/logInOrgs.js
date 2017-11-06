
import React from "react";
import { StyleSheet, Text, TextInput, View,TouchableOpacity, Button} from "react-native";
import OrgProfile from "./orgprofile";
import Navbar from "./navbar";

import conf from '../config.js';

export default class logInOrgs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name:'',
      password:'',
      signedIn: false,
      orgInfo: {}
    };
    fetch(conf.url + '/orgs/signout',
      {method:'GET'})
  }
    submitSignIn () { 
      
     fetch(conf.url + '/orgs/signin',
      {
          method:'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          },
          body:JSON.stringify({
            name:this.state.name ,
            password:this.state.password})
        }).then((response) => response.json())
           .then((data) => {
            console.log('------------------------------------>')
            console.log(data.events) 
              this.state.orgInfo = data;
              this.setState({signedIn: true})
          })
            .catch((error) => {
                console.error(error);
            });
    }
  

goToProfile () {
  if(this.state.signedIn)
    return <Navbar info = {this.state.orgInfo} profile = {"org"} events = {this.state.orgInfo.events}/>;

  else{
    return <View style = {{marginTop:200,  alignItems: 'center' }}>
      <Text style={{fontWeight: "bold", textAlign: 'center', marginBottom: 10,fontSize:30}}> Sign In </Text>
     <Text style = {{marginRight:80}}>Orgenization name:</Text>
      <TextInput
          style={{height: 50, width: 200 ,alignItems: 'center'}}
          returnKeyType='next'
          placeholder="Enter Yuor Username"
          onChangeText={(name) => this.setState({name})}
          value={this.state.username}
        />
        <Text style = {{marginRight:130}}>Password:</Text>
        <TextInput
          returnKeyType='go'
          style={{height: 50, width: 200,alignItems: 'center'}}
          placeholder="Enter Your Password"
          secureTextEntry = {true}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button title = "submit" onPress = {this.submitSignIn.bind(this)}/>
      </View>
    }
}


    render() {
        return (
            <View>
                {this.goToProfile()}
            </View>
        );
    }
}
