import React, { Component } from 'react';
import Room from './Room';

class RoomList extends Component {
    render() {

        // We use .map here so that we can run this code for every room in the state (App.js)

        return this.props.rooms.map(room => (
        	<Room 
        		key={room.id} 
        		room={room} 
        		addPerson={this.props.addPerson} 
        		removePerson={this.props.removePerson} 
        		lock={this.props.lock} 
        		/>
        ))
    }
}

export default RoomList;
