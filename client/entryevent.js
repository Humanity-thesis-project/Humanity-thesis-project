
import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native';


export default class Entryevent extends React.Component {
  constructor(props) {
    super(props);
    this.callEvPage = () => {
      props.EvPage(this.props.keys);
    }
  }
  render() {
    return(
      <View>
        <TouchableOpacity onPress={this.callEvPage}>
           <Text>{this.props.event.name}</Text>
        </TouchableOpacity> 
      </View>
    )
  }
}
const styles = StyleSheet.create(
    {
        container: {
    
            fontSize: 14,
            lineHeight: 24,
            color: "black"
        },
        container1: {  
            fontSize: 14,
            lineHeight: 24,
            color: "blue"
        },
        cont: {
            backgroundColor:"#99ceff",
            width:350,
            marginLeft:0,
            marginRight:0
     
        //    justifyContent: 'space-between'
        }
    }
);

