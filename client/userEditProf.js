import React from "react";
import { Text, View, TextInput, Button,Image} from "react-native";
import conf from "../config";
import UserProfile from './userprofile';

                
export default class UserEditProf extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      age:"",
      password: "",
      submitEdite : false 
    };
  }

  onUpdate () {
    fetch(conf.url + '/users/editprofile', {
      method: 'PUT',
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
    })
      .then((response) => console.log(response))
      .then((data) => {
       console.log(data);
       this.setState({submitEdite:true});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {

    const editprofile =<View>
      <Image source={require("../images/blue.jpg")} > 
      <View style = {{marginTop:10, marginRight: 50 ,marginLeft: 90}}>
          <Text style={{fontWeight: "bold", marginBottom: 30,fontSize:25,color:"white"}}> 

       update my profile data </Text>
      
      <Text style={{fontWeight: "bold",fontSize:20,color:"white"}}>Update Username:</Text>
      <TextInput
        style={{height: 50, width: 200 }}
        placeholder="Enter New Username"
        returnKeyType = "next"
        onChangeText={(username) => this.setState({username})}
      />
      <Text style={{fontWeight: "bold",fontSize:20,color:"white"}}>Update Email:</Text>
      <TextInput
        style={{height: 50, width: 200}}
        placeholder="Enter New Email"
        returnKeyType = "next"
        keyboardType = "email-address"
        autoCapitalize = "none"
        onChangeText={(email) => this.setState({email})}
      />
      <Text style={{fontWeight: "bold",fontSize:20,color:"white"}}>Update Age:</Text>
       <TextInput
        style={{height: 50, width: 200}}
        placeholder="Enter New Age"
        returnKeyType = "next"
        autoCapitalize = "none"
        onChangeText={(age) => this.setState({age})}
      />
      <Text style={{fontWeight: "bold",fontSize:20,color:"white"}}>Update Password:</Text>
      <TextInput
        style={{height: 50, width: 200}}
        placeholder="Enter New Password"
        returnKeyType = "go"
        secureTextEntry = {true}
        onChangeText={(password) => this.setState({password})}
      />
       <View style={{marginLeft: 10,marginRight: 140}}>
      <Button title = "submit" onPress = {this.onUpdate.bind(this)} />
      </View>
          </View>
          </Image>
          </View>


    if(this.state.submitEdite){
      return <UserProfile/>;
    }
    return editprofile;
  }  
    
  }
