import React from "react";
import { Text, View, TextInput, KeyboardAvoidingView, Button} from "react-native";
                

export default class Createevents extends React.Component {
    constructor(){
        super();
        this.state = {
            name: "",
            description: "",
            location: "",
            time: "",
            created:false,
            ShowOrgprofile:false
        };
    }

    onUpdate () {
        fetch("https://thawing-garden-23809.herokuapp.com/events/updateevent", {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: this.state.name,
                description: this.state.description,
                location: this.state.location,
                time: this.state.time,
                duration : this.state.duration,
                ageLimit: this.state.ageLimit,
                volunteers: this.state.volunteers
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
        this.onUpdate();
        this.setState({created: true});
        this.setState({ShowOrgprofile: true});
    }

   render()  {
        
            return (<View>
                <Text style={{fontWeight: "bold", textAlign: "center", marginBottom: 10}}> Update Event </Text>
        
                <Text> Update eventname:</Text>
                <TextInput
                    style={{height: 50, width: 200 }}
                    placeholder="Enter eventname"
                    returnKeyType = "next"
                    onChangeText={(eventname) => this.setState({eventname})}
                />
                <Text>Update description:</Text>
                <TextInput
                    style={{height: 50, width: 200}}
                    placeholder="desctiption"
                    returnKeyType = "next"
                    
                    onChangeText={(desctiption) => this.setState({desctiption})}
                />
                <Text>Update location:</Text>
                <TextInput
                    style={{height: 50, width: 200}}
                    placeholder="location"
                    returnKeyType = "next"
                    
                    onChangeText={(location) => this.setState({location})}
                />
                <Text>Update time:</Text>
                <TextInput
                    style={{height: 50, width: 200}}
                    placeholder="time"
                    returnKeyType = "next"
                    
                    onChangeText={(time) => this.setState({time})}
                />
                <Text>Update duration:</Text>
                <TextInput
                    style={{height: 50, width: 200}}
                    placeholder="duration"
                    returnKeyType = "next"
                    
                    onChangeText={(duration) => this.setState({duration})}
                />
                <Text>Update ageLimit:</Text>
                <TextInput
                    style={{height: 50, width: 200}}
                    placeholder="ageLimit"
                    returnKeyType = "next"
                    
                    onChangeText={(ageLimit) => this.setState({ageLimit})}
                />
                <Text>Update volunteers:</Text>
                <TextInput
                    style={{height: 50, width: 200}}
                    placeholder="volunteers"
                    returnKeyType = "go"
                    
                    onChangeText={(volunteers) => this.setState({volunteers})}
                />
                
                <Button title = "submit" onPress = {this.myFunctions.bind(this)} />
            </View>);
        }
    




   
