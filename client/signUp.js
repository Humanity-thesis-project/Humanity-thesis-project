import React from "react";
import { Text, View, TouchableOpacity, KeyboardAvoidingView,StyleSheet,Image} from "react-native";
import UserSignUp from "./userSignUp";
import OrgSignUp from "./orgSignUp";


export default class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            showUser: false,
            mainComp: true,
            showOrg: false
        };
    }


    goBack (){
        this.setState({showUser: false, showOrg: false, mainComp: true});
    }

    SignUp () {
        this.setState({showUser: true, showOrg: false, mainComp: false});
    }
    Sign() {
        this.setState({showOrg: true, showUser: false, mainComp: false});
    }

    Greeting() {
     
      const mainComponent =  <View style = {{marginTop:280, alignItems: "center" }}><TouchableOpacity onPress = {this.SignUp.bind(this)}><Text>USER </Text></TouchableOpacity>
          <TouchableOpacity onPress = {this.Sign.bind(this)}><Text> ORG </Text></TouchableOpacity></View>

       
            if (this.state.showUser && !this.state.mainComp && !this.state.showOrg) {
                return <View><UserSignUp/><TouchableOpacity style = {{marginTop:30,marginRight:10}} onPress = {this.goBack.bind(this)}>
                <Image source = {require('../images/back-icon.png')} style={{width: 30, height: 30}}/>
                </TouchableOpacity></View>;
            }
            else if(!this.state.showComp && this.state.mainComp && !this.state.showOrg){
                return mainComponent;
         
            }
            else if (this.state.showOrg && !this.state.mainComp && !this.state.showUser) {
                return <View><OrgSignUp/><TouchableOpacity style = {{marginTop:30,marginRight:10}} onPress = {this.goBack.bind(this)}>
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


