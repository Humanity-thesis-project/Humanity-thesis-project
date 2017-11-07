
import React from 'react';

import { Text, View, TouchableOpacity} from 'react-native';
import EventPage from './EventPage'
import EventPageOrg from './EventPageOrg'

export default class Entryevent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      evPage:false,
      tag: props.tag
    };
    
  }

  showCurrent(){
    this.setState({evPage: !this.state.evPage})
  }
myEvents
allEvents
  callEvPage (event) {
    if( this.state.evPage && this.state.tag === "org") {
      return  <EventPageOrg event={this.props.event} tag = {this.state.tag} /> 
    } else if( this.state.evPage && this.state.tag === "user") {
      return <EventPage  event={this.props.event} tag = "myEvents" />;
    } else if( this.state.evPage && this.state.tag === "allEvents") {
      return <EventPage  event={this.props.event} tag = "allEvents" />;
    } else {
      return null;
    }
  }  
  render() {
    return(
      <View style = {{marginLeft:50,marginTop:30}}>
        <View> 
          <TouchableOpacity onPress={this.showCurrent.bind(this)}>
            <Text style={{fontSize:20,color:'white', marginBottom:10}}>{this.props.event.name}</Text>
          </TouchableOpacity> 
           <Text style={{color:'white'}}>Click here to view details</Text>
        </View>
        {this.callEvPage(this.props.events)}
       </View>    
    )
  }
}
// const styles = StyleSheet.create(
//     {
//         container: {
    
//             fontSize: 14,
//             lineHeight: 24,
//             color: "black"
//         },
//         container1: {  
//             fontSize: 14,
//             lineHeight: 24,
//             color: "blue"
//         },
//         cont: {
//             backgroundColor:"#99ceff",
//             width:350,
//             marginLeft:0,
//             marginRight:0
     
//         //    justifyContent: 'space-between'
//         }
//     }
// );

