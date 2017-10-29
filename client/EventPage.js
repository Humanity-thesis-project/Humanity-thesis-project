import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';

export default class EventPage extends React.Component {
  constructor(props) {
    super(props);
    this.callOrgProfile = () => {
      console.log('call org profile : ' , props.event.org_id);
      props.callOrgProfile(props.event.org_id);
    }
  }
  render() {
    return(
      <View>
        <Text>{this.props.event.name}</Text>
        <Text>{this.props.event.description}</Text>
        <Text>{this.props.event.location}</Text>
        
        <TouchableOpacity onPress={this.callOrgProfile}>
           <Text>{this.props.event.org_id}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.props.callBack}>
           <Text>back to event list</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

  