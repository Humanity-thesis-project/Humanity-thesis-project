import React from "react";

import { Text, View,TouchableOpacity,StyleSheet} from "react-native";
export default class Entryevent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View style = {styles.cont}>
                <TouchableOpacity>
                    <Text style = {styles.container1}>{this.props.event.name}</Text>
                    <Text style = {styles.container} >{this.props.event.description}</Text>
                    <Text style = {styles.container}>{this.props.event.location}</Text>
                    <Text style = {styles.container}>{this.props.event.org_id}</Text>
                </TouchableOpacity> 
             
            </View>
        );
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

