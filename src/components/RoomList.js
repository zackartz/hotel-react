import React, { Component } from 'react';
import Room from './Room';

class RoomList extends Component {
    render() {
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
