import React, { Component } from 'react';
import RoomList from './components/RoomList';

class App extends Component {
	state = {
		rooms: [
			{
				id: 1,
				people: [],
				isCleaning: false
			},
			{
				id: 2,
				people: [],
				isCleaning: false
			},			
			{
				id: 3,
				people: [],
				isCleaning: false
			},			
			{
				id: 4,
				people: [],
				isCleaning: false
			},			
			{
				id: 5,
				people: [],
				isCleaning: false
			},			
			{
				id: 6,
				people: [],
				isCleaning: false
			}
		]
	}

	addPerson = (id, value) => {
		this.setState({ rooms: this.state.rooms.map(room => {
			if (room.id === id) {

				if (room.people.length > 3) {
					alert("You can only have 4 people per room");
					return room;
				}

				room.people.push(value);
			}
			return room;
		}) })
	}

	removePerson = (id, value) => {
		this.setState({ rooms: this.state.rooms.map(room => {
			if (room.id === id) {

				let itemCount = null;
				if (isNaN(value)) {
					for (var i = room.people.length - 1; i >= 0; i--) {
						if (value === room.people[i]) {
							itemCount = i;
						}
					}
					if (itemCount === null) {
						alert("Could not find that person")
						return room;
					}
				} else {
					itemCount = value - 1;				
				}
				room.people.splice(itemCount, 1)
			}
			return room;
		}) })
	}

	lock = (id) => {
		this.setState({ rooms: this.state.rooms.map(room => {
			if (room.id === id) {
				room.isCleaning = !room.isCleaning
			}
			return room;
		}) })
	}

	render() {
    	return (
        	<div className="App">
        		<RoomList 
        			rooms={this.state.rooms} 
        			addPerson={this.addPerson} 
        			removePerson={this.removePerson} 
        			lock={this.lock} />
        	</div>
    	);
	}
}

export default App;
