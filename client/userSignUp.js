import React from "react";
import { Text, View, TextInput, KeyboardAvoidingView,StyleSheet, Button} from "react-native";
import LogInUsers from "./logInUsers";
import conf from "../config"
                
export default class UserSignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            username: "",
            email: "",
            password: "",
            signedUp: false
        };
    }


onSignUp () {
   fetch(conf.url + '/users/signup', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: this.state.username,
    email: this.state.email,
    age: this.state.age,
    password:this.state.password
  })
}) .then((response) => console.log(response))
      .then((data) => {
       console.log(data)
      })
      .catch((error) => {
        console.error(error);
      });
}

    myFunctions(){
        this.onSignUp();
        this.setState({signedUp: true});
    }

    goToLogIn () {
        if(this.state.signedUp)
            return <LogInUsers/>;


  else{
    return <View style = {{marginTop:200, alignItems: "center" }}>
      <Text style={{fontWeight: "bold", textAlign: 'center', marginBottom: 10}}> Sign Up </Text>
        
    <Text style = {{marginRight:130}}>Username:</Text>
      <TextInput
          style={{height: 50, width: 200 }}
          placeholder="Enter Username"
          returnKeyType = "next"
          onChangeText={(username) => this.setState({username})}
        />
        <Text style = {{marginRight:160}}>Email:</Text>
        <TextInput
          style={{height: 50, width: 200}}
          placeholder="Enter Email"
          returnKeyType = "next"
          keyboardType = "email-address"
          autoCapitalize = "none"
          onChangeText={(email) => this.setState({email})}
        />
        <Text style = {{marginRight:160}}>Age:</Text>
        <TextInput
          style={{height: 50, width: 200}}
          placeholder="Enter Age"
          returnKeyType = "next"
          keyboardType = "phone"
          autoCapitalize = "none"
          onChangeText={(age) => this.setState({age})}
        />
        <Text style = {{marginRight:130}}>Password:</Text>
        <TextInput
          style={{height: 50, width: 200}}
          placeholder="Enter Password"
          returnKeyType = "go"
          secureTextEntry = {true}
          onChangeText={(password) => this.setState({password})}
        />
        <Button title = "submit" onPress = {this.myFunctions.bind(this)} />
      </View>
    }
  }




    render() {
        return (
            <View>
                {this.goToLogIn()}
            </View>
        );
    }
}
