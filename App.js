import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import SignUp from './client/signUp';
import SignIn from './client/signIn';
import List from './client/list';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showSignIn: false,
      showSignUp: false,
      showMain: true,
    };
  }
  signin =() => {
    this.setState({ showSignUp: false});
    this.setState({ showSignIn: true});
    this.setState({ showMain: false });
  };
  signup = () => {
    this.setState({ showSignUp: true });
    this.setState({ showSignIn: false });
    this.setState({ showSMain: false });
  };

  main() {
 
  const mainComponent =  
        <View>
        <Image source={require('./images/32799248.png')}/>

        <Text >Wlcom to our applecation ['Humanity'] If you are from our family</Text>
        <Text > and you want to signIn WELCOM from here press on signIn</Text>

        <TouchableOpacity onPress={this.signin.bind(this)}>
          <Text>Login</Text>
        </TouchableOpacity>
        <Text > Or if you want to JOIN US WELCOM from here</Text>
        <TouchableOpacity onPress={this.signup.bind(this)}>
          <Text>Sign up</Text>
        </TouchableOpacity>
      </View>

   
    if (this.state.showSignIn && !this.state.mainComp && !this.state.showSignUp) {
    return <SignIn/>
  }
  else if(!this.state.showSignIn && this.state.showMain && !this.state.showSignUp){
    return mainComponent;
     
  }
    else if (this.state.showSignUp && !this.state.mainComp && !this.state.showSignIn) {
    return <SignUp/>;

  }
}

  render() {
    return (
      <View style = {styles.container}>
        {this.main()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
AppRegistry.registerComponent('App', () => App);
