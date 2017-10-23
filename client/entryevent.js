import React from 'react';

import { Text, View,TouchableOpacity} from 'react-native';
export default class Entryevent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <View>
            <TouchableOpacity>
               <Text>{this.props.event.name}</Text>
               <Text>{this.props.event.description}</Text>
               <Text>{this.props.event.location}</Text>
               <Text>{this.props.event.org_id}</Text>

             </TouchableOpacity> 
      </View>
    )
  }
}

  