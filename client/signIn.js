
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView,Image} from 'react-native';
import LogInUsers from './logInUsers';
import LogInOrgs from './logInOrgs';


export default class SignIn extends React.Component {
    constructor(){
        super();
        this.state = {
            showUser: false,
            mainComp: true,
            showOrg: false
        };
    }

    SignUp () {
        this.setState({showUser: true, showOrg: false, mainComp: false});
    }
    Sign() {
        this.setState({showOrg: true, showUser: false, mainComp: false});
    }

    goBack (){
        this.setState({showOrg: false, showUser: false, mainComp: true});
    }

    Greeting() {
 
  const mainComponent =  <View style = {styles.container}><TouchableOpacity onPress = {this.SignUp.bind(this)} style = {{marginTop:300 }}><Text>USER </Text></TouchableOpacity>
      <TouchableOpacity onPress = {this.Sign.bind(this)} style = {{marginTop:100 }}><Text> ORG </Text></TouchableOpacity></View>

   
        if (this.state.showUser && !this.state.mainComp && !this.state.showOrg) {
            return <LogInUsers/>;
        }
        else if(!this.state.showComp && this.state.mainComp && !this.state.showOrg){
            return mainComponent;
     
        }
        else if (this.state.showOrg && !this.state.mainComp && !this.state.showUser) {
            return <View><LogInOrgs/><TouchableOpacity style = {{marginTop:30,marginRight:10}} onPress = {this.goBack.bind(this)}>
            <Image source = {require('../images/back-icon.png')} style={{width: 30, height: 30}}/>
            </TouchableOpacity></View>;

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

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    justifyContent: 'center',

  },
});