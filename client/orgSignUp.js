import React from "react";
import { Text, View, TextInput, KeyboardAvoidingView, Button,Image} from "react-native";
import LogInOrgs from "./logInOrgs";
import conf from '../config.js';

export default class OrgSignUp extends React.Component {
  constructor(){
    super();
    this.state = {
        name: "" ,
        email: "",
        description: "",
        password: "",
        signedUp: false
    };
  }


  onSignUp () {
    fetch(conf.url + '/orgs/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        description: this.state.description,
        password:this.state.password
      })
    })
    .then((response) => response.json())
    .then((data) => {
     console.log(data)
    })
    .catch((error) => {
      console.error(error);
    });
  }

  goToLogIn () {
    if (this.state.signedUp) {
      return (<LogInOrgs/>);
    } else { 
      return (
        <View>
          <Image source={require("../images/blue.jpg")} > 
            <View style = {{marginTop:50, marginRight: 50 ,marginLeft: 90}}>
      
            <Text style={{fontWeight: "bold", marginBottom: 30,fontSize:40,color:"white"}}> Sign Up
            </Text>
            
          <Text style={{fontWeight: "bold",fontSize:20,color:"white"}}>Username:</Text>
          <TextInput
            style={{height: 50, width: 200 }}
            placeholder="Enter name"
            returnKeyType = "next"
            onChangeText={(name) => this.setState({name})}
          />
          <Text style={{fontWeight: "bold",fontSize:20,color:"white"}}>Email:</Text>
          <TextInput
            style={{height: 50, width: 200}}
            placeholder="Enter Email"
            returnKeyType = "next"
            keyboardType = "email-address"
            autoCapitalize = "none"
            onChangeText={(email) => this.setState({email})}
          />
          <Text style={{fontWeight: "bold",fontSize:20,color:"white"}}>Description:</Text>
          <TextInput
            style={{height: 50, width: 200}}
            placeholder="Enter description of your work"
            returnKeyType = "next"
            onChangeText={(description) => this.setState({description})}
          />
          
          <Text style={{fontWeight: "bold",fontSize:20,color:"white"}}>Password:</Text>
          <TextInput
            style={{height: 50, width: 200}}
            placeholder="Enter Password"
            returnKeyType = "go"
            secureTextEntry = {true}
            onChangeText={(password) => this.setState({password})}
          />
          <View style={{marginLeft: 10,marginRight: 140}}>
          <Button title = "submit" onPress = {this.onSignUp.bind(this)}/>
          </View>
          </View>
          </Image>
          </View>)
    
        }
    }

    render() {
        return (
            <View>
                { this.goToLogIn() }
            </View>
        );
    }

}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'rgb(255, 0, 255)',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });