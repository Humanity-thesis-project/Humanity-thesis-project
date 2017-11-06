import React from 'react';
import conf from './config.js';
import { StyleSheet, Text, View, AppRegistry, Image, KeyboardAvoidingView, TouchableOpacity, Dimensions} from 'react-native';
import SignUp from './client/signUp';
import SignIn from './client/signIn';
import Createevents from './client/createevents';
import List from './client/list';

import Navbar from './client/navbar';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showSignIn: false,
      showSignUp: false,
      showMain: true,
      isLogged: false,
      type:"",
      info: {}
    };
    const width = Dimensions.get('window').width
    const height = Dimensions.get('window').height
  }
  signin = () => {
    this.setState({ showSignUp: false});
    this.setState({ showSignIn: true});
    this.setState({ showMain: false });
  };
  signup = () => {
    this.setState({ showSignUp: true });
    this.setState({ showSignIn: false });
    this.setState({ showMain: false });
  };

  
  



  // isLoggedIn () {
  //   fetch(conf.url + '/isLoggedIn',
  //     {method:'GET'})
  //   .then((response) => response.json())
  //     .then((data) => {
  //       console.log('------------------------------------>')
  //       console.log(data)
  //       this.state.isLogged = data.isLoggedIn;
  //       this.state.type = data.type
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //    });
  // }

  goBack (){
    this.setState({ showSignUp: false });
    this.setState({ showSignIn: false });
    this.setState({ showMain: true });
  }

  main() {
 
  const mainComponent =  
        <View >
        <Image source={require('./images/32799248.png')}/>
        <Text >Welcom to our application 'Humanity' If you are from our family</Text>
        <Text > and you want to signIn WELCOM from here press on signIn</Text>

        <TouchableOpacity onPress={this.signin.bind(this)}>
          <Text>Sign In</Text>
        </TouchableOpacity>
        <Text> Or if you want to JOIN US WELLCOM from here</Text>
        <TouchableOpacity onPress={this.signup.bind(this)}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>

  if (this.state.showSignIn && !this.state.showMain && !this.state.showSignUp) {
    return <View>
            <SignIn/> 
            <TouchableOpacity style = {{marginTop:30,alignContent:'center'}} onPress = {this.goBack.bind(this)}>
            <Image source = {require('./images/back-icon.png')} style={{width: 30, height: 30}}/>
            </TouchableOpacity>
          </View>
  }
  else if(!this.state.showSignIn && this.state.showMain && !this.state.showSignUp){
    return mainComponent;
     
  }
  else if(this.state.showSignUp && !this.state.showMain && !this.state.showSignIn) {
    return <View>
            <SignUp/> 
            <TouchableOpacity style = {{marginTop:30,marginRight:10}} onPress = {this.goBack.bind(this)}>
            <Image source = {require('./images/back-icon.png')} style={{width: 30, height: 30}}/>
            </TouchableOpacity>
          </View>;
  }
}

  render() {
    return (
      <View>
       {this.main()}
      </View>
    );
  }
}


AppRegistry.registerComponent('App', () => App);
