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


SignUp () {
    this.setState({showUser: true, showOrg: false, mainComp: false});
}
Sign() {
    this.setState({showOrg: true, showUser: false, mainComp: false});
}

Greeting() {
 
  const mainComponent =
         <View>
            <Image source={require("../images/blue.jpg")} >  
            <View style = {styles.textcontaniar}> 
                <TouchableOpacity onPress = {this.SignUp.bind(this)} style = {{marginTop:200 }}>
                <Text style = {styles.con}>USER </Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.textcontaniar}>
                <TouchableOpacity onPress = {this.Sign.bind(this)} style = {{marginTop:50 }}>
                <Text style = {styles.con}> ORG </Text>
                </TouchableOpacity>
            </View>

            </Image>
        </View>


   
        if (this.state.showUser && !this.state.mainComp && !this.state.showOrg) {
            return <UserSignUp/>;
        }
        else if(!this.state.showComp && this.state.mainComp && !this.state.showOrg){
            return mainComponent;
     
        }
        else if (this.state.showOrg && !this.state.mainComp && !this.state.showUser) {
            return <OrgSignUp/>;

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
    con:{
   
  textAlign:'center',
   justifyContent: 'center',
    color:'white',
    fontSize:30,
    fontWeight:'bold',
    fontStyle:'italic'
  },
   textcontaniar:{
     marginTop:15,
     marginLeft:50,
      marginRight:170,
  
   }
});

