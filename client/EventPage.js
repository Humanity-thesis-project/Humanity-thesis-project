import React from 'react';
import { Text, View, Alert, TouchableOpacity, StyleSheet, Image,Button} from 'react-native';
import conf from '../config.js';
export default class EventPage extends React.Component {
  constructor(props) {
    super(props); 
        this.state = {
        event: props.event,
        tag: props.tag,
        joined:false,
        unjoined:false
        };
  }
  myFunctions(){
      this.onJoin();
      this.setState({joined: true});
  }

   myUnFunctions(){
      this.onUnJoin();
      this.setState({unjoined: true});
  }

  onJoin() {
      fetch(conf.url + '/events/join', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  },
      body: JSON.stringify({
      event_id: this.state.event.id,
      org_id:this.state.event.org_id
  })
  })
 .then((response) => response.json())
      .then((data) => {
       // console.log(data)
       console.log(this.state.tag)
       Alert.alert( 'JOIN ', data.message, [{text: 'OK', onPress: () => console.log('OK Pressed')}, ], { cancelable: true } )
      })
      .catch((error) => {
        console.error(error);
      });
}

onUnJoin() {
      fetch(conf.url + '/events/unjoin', {
      method: 'DELETE',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  },
      body: JSON.stringify({
      id: this.state.event.id,
      org_id:this.state.event.org_id
  })
  })
 .then((response) => response.json())
      .then((data) => {
       console.log(data)
       Alert.alert( 'UNJOIN ', data.message, [{text: 'OK', onPress: () => console.log('OK Pressed')}, ], { cancelable: true } )
      })
      .catch((error) => {
        console.error(error);
      });
}

showEv(){
  const myEv =  <View>
       <Image source={require("../images/blue.jpg")} >
        <Text>{this.props.event.name}</Text>
        <Text>{this.props.event.description}</Text>
        <Text>{this.props.event.location}</Text>
        <Text>{this.props.event.time}</Text> 
        <View style = {{flexDirection:'row', marginTop: 50,marginLeft:30}}>
        <Text>               </Text>
          <Button title="unjoin" onPress = {this.myUnFunctions.bind(this)} /></View>
        </Image>
      </View>


      const allEv =  <View>
       <Image source={require("../images/blue.jpg")} >
        <TouchableOpacity >
        <Text>{this.props.event.name}</Text>
        <Text>{this.props.event.description}</Text>
        <Text>{this.props.event.location}</Text>
        <Text>{this.props.event.time}</Text> 
        <View style = {{flexDirection:'row', marginTop: 50,marginLeft:30}}>
          <Button title="join" onPress = {this.myFunctions.bind(this)} />
          <Text>               </Text>
          </View>
        </TouchableOpacity> 
        </Image>
      </View>

      if(this.state.tag==="myEvents")
        return myEv
      else if(this.state.tag==="allEvents")
        return allEv


}



  render() {
    return(
     <View>{this.showEv()}</View>
    )
  }
}



