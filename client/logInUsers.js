import React from 'react';
import { StyleSheet, Text, TextInput, View,TouchableOpacity, Button} from 'react-native';
import UserProfile from './userprofile'

export default class loginInUseres extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:'',
      signedIn: false,
      userInfo: []
    };
  }

  
submitSignIn () { 
      
     fetch('https://thawing-garden-23809.herokuapp.com/users/signin',
      {
          method:'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          },
          body:JSON.stringify({
            username:this.state.username ,
            password:this.state.password})
        })
          .then((response) => response.json())
           .then((data) => {
            console.log(data) 
              this.state.userInfo[0] = data;
              this.setState({ signedIn: true})
          })
            .catch((error) => {
              console.error(error);
     });
}




myFunctions(){
 this.submitSignIn();
}


goToProfile () {
  if(this.state.signedIn)
    return <UserProfile name = {this.state.userInfo}/>

  else{
    return <View>
      <Text style={{fontWeight: "bold", textAlign: 'center', marginBottom: 10,fontSize:30}}> Sign In </Text>
     <Text>Username:</Text>
      <TextInput
          style={{height: 50, width: 200 ,alignItems: 'center'}}
          returnKeyType='next'
          placeholder="Enter Yuor Username"
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
        />
        <Text>Password:</Text>
        <TextInput
          returnKeyType='go'
          style={{height: 50, width: 200,alignItems: 'center'}}
          placeholder="Enter Your Password"
          secureTextEntry = {true}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button title = "submit" onPress = {this.myFunctions.bind(this)}/>
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


