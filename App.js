import React from 'react';
import conf from './config.js';
import { StyleSheet, Text, View, AppRegistry, Image, KeyboardAvoidingView, TouchableOpacity, Dimensions} from 'react-native';
import SignUp from './client/signUp';
import SignIn from './client/signIn';

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
    this.setState({ showSMain: false });
  }

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

  main() {
 
  const mainComponent =  
        <View style={{marginTop: 30, marginLeft:80,marginRight:50}} >
        <Image source={require('./images/200x200-icon-drop.png')}/>
   
        <Text style={{fontSize:18,marginTop:20,fontStyle:'italic'}}>Welcome to our application 'Humanity' If you are from our family</Text>
        <Text style={{fontSize:18,marginTop:20,fontStyle:'italic'}}> and you want to signIn WELCOME from here press on signIn</Text>
      
        <TouchableOpacity onPress={this.signin.bind(this)}>

          <Text>Sign In</Text>
        </TouchableOpacity>
    <Text style={{fontSize:18,marginTop:20,fontStyle:'italic'}} > Or if you want to JOIN US WELCOME from here</Text>
        <TouchableOpacity onPress={this.signup.bind(this)}>

          <Text>Sign Up</Text>
        </TouchableOpacity>
     </View>

  if (this.state.showSignIn && !this.state.mainComp && !this.state.showSignUp) {
    return <SignIn/>
  }
  else if(!this.state.showSignIn && this.state.showMain && !this.state.showSignUp){
    return mainComponent;
     
  }
  else if(this.state.showSignUp && !this.state.mainComp && !this.state.showSignIn) {
    return <SignUp/>;
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



    
  
//    }
// });
