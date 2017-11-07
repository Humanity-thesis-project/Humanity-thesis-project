
import conf from '../config.js'
import React from 'react';
import { StyleSheet, Text, TextInput, View,TouchableOpacity, Button,Image} from 'react-native';
import Navbar from './navbar';
// imsport UserProfile from './userprofile';

export default class LogInUsers extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:'',
      signedIn: false,
      userInfo:{}
    };
     fetch( conf.url + '/users/signout',
      {method:'GET'})
  }
  
    submitSignIn () { 
      

     fetch(conf.url + '/users/signin',
      {
          method:'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          },
          body:JSON.stringify({
            username:this.state.username ,
            password:this.state.password})
        }) .then((response) => response.json())
           .then((data) => {
            console.log('------------------------------------>')
            console.log(data) 
              this.setState({userInfo:data});
              this.setState({signedIn: true});
          })
          .catch((error) => {
              console.error(error);
          });
    }



    signOut(){
      this.setState({signedIn: false})
    }



goToProfile () {

  if(this.state.signedIn){
    return <Navbar info = {this.state.userInfo} profile = {"user"} signOut = {this.signOut.bind(this)} />
  } else {
    return (<View>
      <Image source={require("../images/blue.jpg")} > 
      <View style = {{marginTop:170, marginRight: 50 ,marginLeft: 90}}>
          <Text style={{fontWeight: "bold", marginBottom: 30,fontSize:40,color:"white"}}> Sign In </Text>
         <Text style={{fontWeight: "bold",fontSize:20,color:"white"}}>Username:</Text>
          <TextInput 
              style={{height: 50, width: 200 ,alignItems: 'center'}}
              returnKeyType='next'
              placeholder="Enter Yuor Username"
              onChangeText={(username) => this.setState({username})}
              value={this.state.username}
            />
            <Text style={{fontWeight: "bold",fontSize:20,color:"white"}}>Password:</Text>
            <TextInput
              returnKeyType='go'
              style={{height: 50, width: 200,alignItems: 'center'}}
              placeholder="Enter Your Password"
              secureTextEntry = {true}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
            />
            <View style={{marginLeft: 10,marginRight: 140}}>
            <Button title = "submit" onPress = {this.submitSignIn.bind(this)}/>
            </View>
            <Text>{'\n'}{'\n'}</Text>
       <Button title = "BACK" style = {{marginTop:100}} onPress = {() => this.props.show("showSignIn")}/>
          </View>
          </Image>
          </View>)
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

