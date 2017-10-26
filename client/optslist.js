import React from "react";
import { StyleSheet, Text, View,TouchableOpacity} from "react-native";

import allStyle from "./style.js";

const styles = StyleSheet.create(allStyle.OptsList);

export default class OptsList extends React.Component {
    constructor(props) {
        super(props);
        this.getEvents = () => {
            fetch("http:192.168.8.140:3336/events", 
                {
                    "method":"GET", 
                    "headers": { "Accept": "application/json", "Content-Type": "application/json"
                    }
                })
                .then((reponse)=> {
                    props.whatToView({events : reponse._bodyInit});
                    console.log("data : ",reponse._bodyInit);
                });
        };

        this.getProfile = () => {
            fetch("http:192.168.8.140:3336/" + props.type + "s/" + props.type + "info", 
                {
                    "method":"GET", 
                    "headers": { "Accept": "application/json", "Content-Type": "application/json"
                    }
                })
                .then((reponse)=> {
                    props.whatToView({profile : reponse._bodyInit});
                    console.log("data : ",reponse._bodyInit);
                });
        };

        this.logMeOut = () => {
            fetch("http:192.168.8.140:3336/users/signout", {"method":"GET"})
                .then((reponse)=> {
                    props.whatToView("signed out");
                    console.log("logged out ? ",reponse._bodyInit);
                });
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.optionsContainer} onPress={this.getProfile.bind(this)}>
                    <Text style={styles.options}> profile </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionsContainer} onPress={this.getEvents.bind(this)}>
                    <Text style={styles.options}> events list</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionsContainer} onPress={this.logMeOut.bind(this)}>
                    <Text style={styles.options}> logout </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
