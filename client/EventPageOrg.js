import React from 'react';
import { Text, View, Alert, TouchableOpacity, StyleSheet, Image,Button} from 'react-native';
import conf from '../config.js';
export default class EventPageOrg extends React.Component {
  constructor(props) {
    super(props); 
        this.state = {
        event: props.events,
        tag: props.tag,
        deleted:false
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
       console.log(this.state.tag)})
      this.setState({deleted : true})
       console.log(this.state.deleted)
      //  Alert.alert( 'JOIN ', data.message, [{text: 'OK', onPress: () => console.log('OK Pressed')}, ], { cancelable: true } )
      // })
      .catch((error) => {
        console.error(error);
      });
  }

// onUnJoin() {
//       fetch(conf.url + '/events/unjoin', {
//       method: 'DELETE',
//       headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//   },
//       body: JSON.stringify({
//       id: this.state.event.id,
//       org_id:this.state.event.org_id
//   })
//   })
//  .then((response) => response.json())
//       .then((data) => {
//        console.log(data)
//        Alert.alert( 'UNJOIN ', data.message, [{text: 'OK', onPress: () => console.log('OK Pressed')}, ], { cancelable: true } )
//       })
//       .catch((error) => {
//         console.error(error);
//       });
// }

  render() {
    

    if (!this.state.deleted) { 
      return ( <View>
       <Image source={require("../images/blue.jpg")} >
        <TouchableOpacity >
        <Text>{this.state.event.name}</Text>
        <Text>{this.state.event.description}</Text>
        <Text>{this.state.event.location}</Text>
        <Text>{this.state.event.time}</Text> 
        <View style = {{flexDirection:'row', marginTop: 50,marginLeft:30}}>
        <Button title="Delete Event" onPress = {this.delete.bind(this)} />
        <Text>               </Text>
        </View>
        </TouchableOpacity> 
        </Image>
     </View> )
    } else {
      return null;
    }
  }

}

