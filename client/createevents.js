import React from "react";
import { Text, View, TextInput, KeyboardAvoidingView, Button, ScrollView, StyleSheet, Dimensions} from "react-native";
                

export default class Createevents extends React.Component {
    constructor(){
        super();
        this.state = {
            name: "",
            description: "",
            location: "",
            time: "",
            duration:"",
            agelimit:"",
            volunteers:"",
            created:false,
            ShowOrgprofile:false
        };
    }

    create () {
        fetch("https://thawing-garden-23809.herokuapp.com/events/create", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: this.state.name,
                description: this.state.description,
                location:this.state.location,
                time:this.state.time,
                agelimit:this.state.agelimit,
                duration :this.state.duration,
                volunteers:this.state.volunteers
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
        this.creat();
        this.setState({created: true});
        this.setState({ShowOrgprofile: true});
    }

    goCreate () {
        
            return <View style = {{alignItems: "center", marginTop: 10}}>
                <Text style={{fontWeight: "bold", textAlign: "center", marginBottom: 20}}> Creat Event </Text>
        
                <Text>Event Name:</Text>
                <TextInput
                    style={{height: 50, width: 200 }}
                    placeholder="Enter eventname"
                    returnKeyType = "next"
                    onChangeText={(eventname) => this.setState({eventname})}
                />
                <Text>Description:</Text>
                <TextInput
                    style={{height: 50, width: 200}}
                    placeholder="desctiption"
                    returnKeyType = "next"
                    
                    onChangeText={(desctiption) => this.setState({desctiption})}
                />
                <Text>Location:</Text>
                <TextInput
                    style={{height: 50, width: 200}}
                    placeholder="location"
                    returnKeyType = "next"
                    
                    onChangeText={(location) => this.setState({location})}
                />
                <Text>Time:</Text>
                <TextInput
                    style={{height: 50, width: 200}}
                    placeholder="time"
                    returnKeyType = "next"
                    
                    onChangeText={(time) => this.setState({time})}
                />
                <Text>Age Limit:</Text>
                <TextInput
                    style={{height: 50, width: 200}}
                    placeholder="agelimit"
                    returnKeyType = "next"
                    
                    onChangeText={(agelimit) => this.setState({agelimit})}
                />
                <Text>Volunteers:</Text>
                <TextInput
                    style={{height: 50, width: 200}}
                    placeholder="volunteers"
                    returnKeyType = "go"
                    
                    onChangeText={(volunteers) => this.setState({volunteers})}
                />
                <Button title = "submit" onPress = {this.myFunctions.bind(this)} />
            </View>;
        }
    




    render() {
        return (
            <View>
                {this.goCreate()}
            </View>
            
        );
    }
}




