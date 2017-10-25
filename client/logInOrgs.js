import React from "react";
import { StyleSheet, Text, TextInput, View,TouchableOpacity} from "react-native";

export default class logInOrgs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:""
        };
    }

    submitSignIn () {
        fetch("https://thawing-garden-23809.herokuapp.com/orgs/signin",
            {
                method:"POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({
                    username:this.state.username ,
                    password:this.state.password})
            })
            .then((reponse)=> (console.log("data : ",reponse._bodyInit)));
    }
  

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontWeight: "bold", textAlign: "center", marginBottom: 10,fontSize:30}}> Sign In </Text>
                <Text>Orgenization name:</Text>
                <TextInput
                    style={{height: 50, width: 200 ,alignItems: "center"}}
                    returnKeyType='next'
                    placeholder="Enter Yuor Username"
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                />
                <Text>Password:</Text>
                <TextInput
                    returnKeyType='go'
                    style={{height: 50, width: 200,alignItems: "center"}}
                    placeholder="Enter Your Password"
                    secureTextEntry = {true}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                />
                <TouchableOpacity style={styles.loginSubmitButt} onPress={this.submitSignIn.bind(this)}>
                    <Text>submitSignIn</Text>
                </TouchableOpacity>
            </View>
    
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "gray",
        alignItems: "center",
        justifyContent: "center",
    },
    loginSubmitButt:{
        backgroundColor:"green",
        paddingVertical:15,
    }
});