import React from "react";
import { Text, View, TextInput, KeyboardAvoidingView,StyleSheet, Button} from "react-native";
import LogInUsers from "./logInUsers";
                

export default class UserSignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            username: "",
            email: "",
            password: "",
            signedUp: false
        };
    }

    onSignUp () {
        fetch("https://thawing-garden-23809.herokuapp.com/users/signup", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: this.state.username,
                email: this.state.email,
                password:this.state.password
            })
        }) .then((response) => console.log(response))
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    myFunctions(){
        this.onSignUp();
        this.setState({signedUp: true});
    }

    goToLogIn () {
        if(this.state.signedUp)
            return <LogInUsers/>;

        else{
            return <View>
                <Text style={{fontWeight: "bold", textAlign: "center",fontSize:30}}> Sign Up </Text>
                
                <Text style={styles.textcontaniar} >Username:</Text>
                <TextInput
                style={styles.textcontaniar1}
                   
                    placeholder="Enter Username"
                    returnKeyType = "next"
                    onChangeText={(username) => this.setState({username})}
                />
               
                <Text style={styles.textcontaniar}>Email:</Text>
                <TextInput
                style={styles.textcontaniar1}
                   
                    placeholder="Enter Email"
                    returnKeyType = "next"
                    keyboardType = "email-address"
                    autoCapitalize = "none"
                    onChangeText={(email) => this.setState({email})}
                />
                
                <Text style={styles.textcontaniar}>Password:</Text>
                <TextInput
                style={styles.textcontaniar1}
                   
                    placeholder="Enter Password"
                    returnKeyType = "go"
                    secureTextEntry = {true}
                    onChangeText={(password) => this.setState({password})}
                />
                <Button  title = "submit" onPress = {this.myFunctions.bind(this)} />
            </View>;
        }
    }




    render() {
        return (
            <View>
                {this.goToLogIn()}
            </View>
        );
    }
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ccd9ff',
//     alignItems: 'center',
//     justifyContent: 'center',

//   },
// });
const styles = StyleSheet.create({
  textcontaniar1:{
    fontSize:20,
    padding:10,
    borderColor:'#fff',
   backgroundColor:'lightblue',
     margin:5,
     marginLeft:10,
     marginRight:10,
     height:50,
    width:200,
    borderBottomLeftRadius:10,
     borderTopLeftRadius:10,
     borderTopRightRadius:10,
    borderBottomRightRadius:10,
  },
  
  textcontaniar:{
    fontSize:20,
   padding:10,
    borderColor:'#fff',
   backgroundColor:'lightblue',
     margin:5,
     marginLeft:10,
     marginRight:10,
     borderBottomLeftRadius:10,
     borderTopLeftRadius:10,
     borderTopRightRadius:10,
    borderBottomRightRadius:10, 
    height:50,
    width:230
  
  }
  
});
