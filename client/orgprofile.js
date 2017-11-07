import React from "react";
import {StyleSheet, Text, View, Image, Button} from "react-native";
import allStyle from "./style.js";
import OrgEditProf from './orgEditProf';
import conf from '../config.js';
import MyEvents from './myEvents'


export default class Orgprofile extends React.Component {

  constructor(props) {

      super(props)
      this.state= {
        information: props.information,
        editprofile:false,
        showEvents: false,
        tag: props.tag
      }
      // fetch(conf.url + '/orgs/orginfo',{
      //   method:'GET'
      // })
      //  .then((response) => response.json())
      //      .then((data) => {
      //       console.log('----------------->.  NEW DATA')
      //       console.log(data) 
      //         this.setState({information: data.user})
      //     })
      //       .catch((error) => {
      //           console.error(error);
      //       });
  }



    changeEditeFlag () {
      this.setState({editprofile:true});
    }
    showMyEvents(){
      this.setState({showEvents: true});
    }

    editProfile(){
      var profile = <View>
      
      <View style= {{ alignItems:"center",borderColor: 'black', borderRadius: 2,backgroundColor: '#87cefa'}}>
         <Text style = {{marginTop: 20}}>Welcome {this.state.information.name}{'\n'}{'\n'}</Text>
        </View>
        <Image source={require("../images/blue.jpg")} >
        <Text style = {{marginTop: 20, marginLeft: 30,fontSize: 20,
          fontWeight: 'bold',color:'white'}}>Email:</Text>
          <Text style = {{marginTop: 20,fontSize: 20, marginLeft: 50,color:'white' }}>{this.state.information.email}</Text>

          <Text style = {{marginTop: 20, marginLeft: 30,fontSize: 20,
          fontWeight: 'bold',color:'white'}}>Rate:</Text>
          <Text style = {{marginTop: 20,color:'white',fontSize: 20, marginLeft: 50 }}>5</Text>

          <Text style = {{marginTop: 20, marginLeft: 30,fontSize: 20,
          fontWeight: 'bold',color:'white'}}>Phone Number:</Text>
          <Text style = {{marginTop: 20,color:'white',fontSize: 15, marginLeft: 50,fontSize: 20 }}>0798726360</Text>
          <View style = {{flexDirection:'row', marginTop: 50,marginLeft:30}}>
          <Button  style = {{width: 50, height: 70}} title = "Edit Profile" onPress = {this.changeEditeFlag.bind(this)}/>
          <Text>                          </Text>
          <Button style = {{width: 50, height: 70}} title = "My Events" onPress = {this.showMyEvents.bind(this)}/>
          </View>
         </Image>
                           

        </View>

      
      if(this.state.editprofile && !this.state.showEvents){
        return <OrgEditProf/>;
      }
      else if(this.state.showEvents && !this.state.editprofile){
        return <MyEvents events = {this.state.information.events} tag = {this.state.tag}/>
      }
    else{
      return profile;
    }
  }
    

    render() {
    return (

      <View>
      {this.editProfile()}

      </View>
    
    );
  }
}