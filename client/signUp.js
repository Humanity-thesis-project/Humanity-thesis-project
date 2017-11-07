import React from "react";
import { Text, View, TouchableOpacity, Button, KeyboardAvoidingView,StyleSheet,Image} from "react-native";

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


    render() {
        return (

            <KeyboardAvoidingView behavior = 'padding'>
                <View>
            <Image source={require("../images/blue.jpg")} >  
            <View style = {styles.textcontaniar}> 
                <TouchableOpacity onPress = {() => this.props.show("showSignUpUser") } style = {{marginTop:200 }}>
                <Text style = {styles.con}>USER </Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.textcontaniar}>
                <TouchableOpacity onPress = {() => this.props.show("showSignUpOrg")} style = {{marginTop:50 }}>
                <Text style = {styles.con}> ORG </Text>
                </TouchableOpacity>
            </View>
                <Text>{'\n'}{'\n'}</Text>
       <Button title = "BACK TO HOME PAGE" style = {{marginTop:100}} onPress = {() => this.props.show("showMain")}/>
            </Image>
        
        
       </View>
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

