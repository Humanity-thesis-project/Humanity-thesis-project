import React from 'react';
import { Text, View, Alert, TouchableOpacity, StyleSheet, Image,Button, FlatList} from 'react-native';
import conf from '../config.js';
export default class EventPageOrg extends React.Component {
  constructor(props) {
    super(props); 
        this.state = {
          event: props.event,
          tag: props.tag,
          deleted:false,
          showUsers:false,
          data:[
            {
              age: 22,
              createdAt: "2017-11-08T09:48:39.000Z",
              email: "anas@humanity",
              id: 1,
              image:'https://cdn3.iconfinder.com/data/icons/rcons-user-action/32/boy-512.png',
              password: "$2a$10$zD2lyxGXD6QBVSxBR2BFPuUwjHhJPyMWWGemaGJrwkX8lpm3xT0rS",
              rate: null,
              updatedAt: "2017-11-08T09:48:39.000Z",
              username: "anas",
            },
            {
              age: 22,
              createdAt: "2017-11-08T09:48:39.000Z",
              email: "ammar@mm",
              id: 1,
              image:'https://cdn3.iconfinder.com/data/icons/rcons-user-action/32/boy-512.png',
              password: "$2a$10$zD2lyxGXD6QBVSxBR2BFPuUwjHhJPyMWWGemaGJrwkX8lpm3xT0rS",
              rate: null,
              updatedAt: "2017-11-08T09:48:39.000Z",
              username: "Ammar",
            }
          ]
        };
  }

  delete() {
      fetch(conf.url + '/events/deleteevent', {
      method: 'DELETE',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  },
      body: JSON.stringify({
      id: this.state.event.id
    })
    })
 .then((response) => response.json())
      .then((data) => {
       console.log(data)
       console.log(this.state.tag)
      this.setState({deleted : true})
       Alert.alert( 'DELETE ', data.message, [{text: 'OK', onPress: () => console.log('OK Pressed')}], { cancelable: true } )
      })
      .catch((error) => {
        console.error(error);
      });
  }

  showVolunteers (){
    this.setState({showUsers:!this.state.showUsers});
  }


  render() {
    

    if (!this.state.deleted && !this.state.showUsers) { 
      return ( <View>
       <Image source={require("../images/blue.jpg")} >
        <Text>{this.state.event.name}</Text>
        <Text>{this.state.event.description}</Text>
        <Text>{this.state.event.location}</Text>
        <Text>{this.state.event.time}</Text> 
        <View style = {{flexDirection:'row', marginTop: 50,marginLeft:30}}>
        <Button title="Delete Event" onPress = {this.delete.bind(this)} />
        <Text>      </Text>
        <Button title="Show Volunteers" onPress = {this.showVolunteers.bind(this)} />
        </View>
        </Image>
     </View> )
    } else if(!this.state.deleted && this.state.showUsers) {
      return (
        <View>
       <Image source={require("../images/blue.jpg")} >
        <Text>{this.state.event.name}</Text>
        <Text>{this.state.event.description}</Text>
        <Text>{this.state.event.location}</Text>
        <Text>{this.state.event.time}</Text>
        <Text>Volunteers:</Text>
        <Button title="Hide Volunteers" onPress = {this.showVolunteers.bind(this)} />
        <FlatList
            data ={this.state.data}
            renderItem ={({item}) =>  <TouchableOpacity onPress = {this.props.showUserProfile(item)} style= {{fontSize:20, alignContent:'center'}}><Text>{item.username}</Text></TouchableOpacity>
            }
           >
        </FlatList>
        <View style = {{flexDirection:'row', marginTop: 50,marginLeft:30}}>
        <Button title="Delete Event" onPress = {this.delete.bind(this)} />
        <Text>      </Text>
        
        </View>
        </Image>
     </View>

        )
    } else {
      return null;
    }
  }

}
