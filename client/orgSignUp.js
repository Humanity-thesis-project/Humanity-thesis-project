import React from 'react';
import { Text, View, TextInput, KeyboardAvoidingView, Button} from 'react-native';






export default class OrgSignUp extends React.Component {
  constructor(){
    super();
    this.state = {
      name: '' ,
      email: '',
      description: '',
      password: ''
    }
  }

onSignUp () {
   fetch('https://thawing-garden-23809.herokuapp.com/orgs/signup', {
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
}) .then((response) => console.log(response))
      .then((data) => {
       console.log(data)
      })
      .catch((error) => {
        console.error(error);
      });
}

render() {
    return (
      <View>
      <Text style={{fontWeight: "bold", textAlign: 'center', marginBottom: 10}}> Sign Up </Text>
        
        <Text>Username:</Text>
        <TextInput
          style={{height: 50, width: 200 }}
          placeholder="Enter name"
          returnKeyType = "next"
          onChangeText={(name) => this.setState({name})}
        />
        <Text>Email:</Text>
        <TextInput
          style={{height: 50, width: 200}}
          placeholder="Enter Email"
          returnKeyType = "next"
          keyboardType = "email-address"
          autoCapitalize = "none"
          onChangeText={(email) => this.setState({email})}
        />
        <Text>Description:</Text>
        <TextInput
          style={{height: 50, width: 200}}
          placeholder="Enter description of your work"
          returnKeyType = "next"
          onChangeText={(description) => this.setState({description})}
        />
        <Text>Password:</Text>
        <TextInput
          style={{height: 50, width: 200}}
          placeholder="Enter Password"
          returnKeyType = "go"
          secureTextEntry = {true}
          onChangeText={(password) => this.setState({password})}
        />
        <Button title = "submit" onPress = {this.onSignUp.bind(this)}/>
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