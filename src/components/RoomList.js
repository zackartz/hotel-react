import React, { Component, PropTypes } from 'react';
import Room from './Room';

class RoomList extends Component {
    render() {
        return this.props.rooms.map(room => (
        	<Room key={room.id} room={room} />
        ))
    }
}

export default RoomList;
