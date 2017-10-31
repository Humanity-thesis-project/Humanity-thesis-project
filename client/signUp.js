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
     
        const mainComponent =  <View style={styles.container}>
        <Image style={styles.ImageBackground} source={require('./../images/alps-2886945_960_720.jpg')}><View >
        <TouchableOpacity onPress = {this.SignUp.bind(this)}><View style={styles.textcontaniar}><Text style={styles.con}>USER</Text></View></TouchableOpacity>
            <TouchableOpacity onPress = {this.Sign.bind(this)}><View  style={styles.textcontaniar}><Text style={styles.con}>ORG</Text></View></TouchableOpacity></View>
 </Image></View>
   
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
    container:{
        flex:1
    },
  ImageBackground: {
    flex: 1,
    width:400,

    alignSelf: 'stretch',

    justifyContent: 'center',
  },
   con:{
  
 textAlign:'center',
   justifyContent: 'center',
    color:'blue',
    fontSize:30,
    fontWeight:'bold',
    fontStyle:'italic',
    //  borderLeftWidth:2,
    // borderRightWidth:2
  },
  textcontaniar:{
   padding:10,
    borderColor:'#fff',
    // borderWidth:1,
   backgroundColor:'white',
    // textShadowOffset:{width:0.5,heigth:0.5},
    // textShadowRadius:5,
     margin:10,
     marginLeft:80,
     marginRight:80,
     borderBottomLeftRadius:30,
     borderTopLeftRadius:30,
     borderTopRightRadius:30,
    borderBottomRightRadius:30
  
  }

});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'rgb(255, 0, 255)',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });