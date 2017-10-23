import React from 'react';
import { Text, View, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import LogInUsers from './logInUsers';
import LogInOrgs from './logInOrgs';






export default class SignIn extends React.Component {
  constructor(){
    super();
    this.state = {
     showUser: false,
     mainComp: true,
     showOrg: false
    }
  }

SignUp () {
    this.setState({showUser: true, showOrg: false, mainComp: false});
}
Sign() {
    this.setState({showOrg: true, showUser: false, mainComp: false});
}

Greeting() {
 
  const mainComponent =  <View><TouchableOpacity onPress = {this.SignUp.bind(this)}><Text>USER </Text></TouchableOpacity>
      <TouchableOpacity onPress = {this.Sign.bind(this)}><Text> ORG </Text></TouchableOpacity></View>

   
    if (this.state.showUser && !this.state.mainComp && !this.state.showOrg) {
    return <LogInUsers/>
  }
  else if(!this.state.showComp && this.state.mainComp && !this.state.showOrg){
    return mainComponent;
     
  }
    else if (this.state.showOrg && !this.state.mainComp && !this.state.showUser) {
    return <LogInOrgs/>;

  }
}

render() {
    return (

      <KeyboardAvoidingView behavior = 'padding'>
        {this.Greeting()}
      </KeyboardAvoidingView>
    
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