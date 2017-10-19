import React from 'react';
import { StyleSheet, Text, AppRegistry, Image, KeyboardAvoidingView} from 'react-native';
import List from './client/eventstodo';
import Login from './client/login';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showLogIn: false
    };
  }
  userLogin = () => {
    this.setState({ showLogIn: true });
  };
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text>ammar</Text>
        <Text></Text>
        <Image source={require('./images/32799248.png')}/>
        <Login />
        <Text>Fill your infromations and press sign in</Text>
        <Text>to see your profile or the events.</Text>
        <List/>
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
