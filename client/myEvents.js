import React from 'react';
import { StyleSheet, Text, View, TouchableHighLight, Image, Button
} from 'react-native';
import List from './list'


export default class MyEvents extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			events: this.props.events,
			tag: props.tag
		};
	}

	render(){
		return (
			<View>
				<List events = {this.state.events} tag = {this.state.tag}/>
			</View>
		)
	}
}

