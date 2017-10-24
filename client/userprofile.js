import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import allStyle from './style.js';
// const styles = StyleSheet.create(allStyle.userprofile);

export default class Userprofile extends React.Component {
  constructor(props) {
      super(props);

  }
  profile() {
    console.log(this.props)
    if(this.props.userprofile) {
      return  (<View>
                <Text>
                  {this.props.userprofile.username}
                </Text>
                <Text>
                  {this.props.userprofile.email}
                 </Text>
                 <Text> 
                  {this.props.userprofile.rate}
                </Text>
              </View>)
    }
    return <Text>not signed in or no props passeed</Text>;
  }


  render() {
    return (
      <View>
        {this.profile()}
      </View>
    );
  }
}

// if(this.props.userprofile.userevent){
//                     this.props.userevent.map((event, index) => (<Entryevent  key = {index} event = {event} /> ))
//                   }
//                   if(this.props.userprofile.userorgs){
//                     this.props.userorgs.map((event, index) => (<Entryevent  key = {index} event = {event} /> ))
//                   }