import React from 'react';
import { StyleSheet, Text, AppRegistry, Image, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import List from './client/eventstodo';
import Login from './client/login';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showSigninUser: false,
      showSigninOrg: false,
      showSignupUser: false,
      showSignupOrg: false,
      showEvents: false,
      showCorrentEvent:false,
      showUserProfile:false,
      showOrgProfile:false
    };
  }
  listComp =() => {
    this.setState({ showEvents: true });
    this.setState({ showSignin: false });
  };
  userLogin = () => {
    this.setState({ showSignin: true });
    this.setState({ showEvents: false });
  };
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Image source={require('./images/32799248.png')}/>
        <Text style={{fontFamily:'Signboard'}}>Wlcom to our applecation ['Humanity'] If you are from our family</Text>
        <Text style={{fontFamily:'Signboard'}}> and you want to signIn WELCOM from here press on signIn</Text>
        <TouchableOpacity onPress={this.userLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
        {this.state.showLogIn ? <Login /> : null}
        <Text style={{fontFamily:'Signboard'}}> Or if you want to JOIN US WELCOM from here</Text>
        <TouchableOpacity onPress={this.listComp}>
          <Text>Sign up</Text>
        </TouchableOpacity>
        {this.state.showEvents ? <List /> : null}
      </KeyboardAvoidingView>
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
