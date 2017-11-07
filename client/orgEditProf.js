import React from "react";
import { Text, View, TextInput, Button,Image} from "react-native";
import conf from "../config"
                
export default class OrgEditProf extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      description : ""
    };
  }

  onUpdate () {
    fetch(conf.url + 'orgs/editprofile', {
      method: 'PUT',
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
      .then((response) => console.log(response))
      .then(({data}) => {
       console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
     <View>
      <Image source={require("../images/blue.jpg")} > 
      <View style = {{marginTop:10, marginRight: 50 ,marginLeft: 90}}>
          <Text style={{fontWeight: "bold", marginBottom: 30,fontSize:25,color:"white"}}> 
 update my profile data </Text>
      
     <Text style={{fontWeight: "bold",fontSize:20,color:"white"}}>Update Name:</Text>
      <TextInput
        style={{height: 50, width: 200 }}
        placeholder="Enter New Name"
        returnKeyType = "next"
        onChangeText={(name) => this.setState({name})}
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
      <Text style={{fontWeight: "bold",fontSize:20,color:"white"}}>Update Password:</Text>
      <TextInput
        style={{height: 50, width: 200}}
        placeholder="Enter New Password"
        returnKeyType = "go"
        secureTextEntry = {true}
        onChangeText={(password) => this.setState({password})}
      />
      <Text style={{fontWeight: "bold",fontSize:20,color:"white"}}>Update Description:</Text>
      <TextInput
        style={{height: 50, width: 200}}
        placeholder="Enter New Description"
        returnKeyType = "go"
        secureTextEntry = {true}
        onChangeText={(description) => this.setState({description})}
      />
       <View style={{marginLeft: 10,marginRight: 140}}>
      <Button title = "submit" onPress = {this.onUpdate.bind(this)} />
    </View>
          </View>
          </Image>
          </View>
    );
  }
}
