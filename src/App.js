// Here we define the components and packages that we will be using.

import React, { Component } from 'react';
import RoomList from './components/RoomList';

// Get the time for use in logging.



// Define the main App class.

class App extends Component {

	// This state is stored here, it stores all the information for each room, such as ID, if the room is being cleaned and the people in the room.

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

	// The addPerson function is in charge of adding guest to the room
	// we use the map function so we can write this code once and have it
	// be used per room.

	addPerson = (id, value) => {

		let today = new Date();
		let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
		let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		let dateTime = date + " " + time;
		
		this.setState({ rooms: this.state.rooms.map(room => {
			if (room.id === id) {

				if (room.people.length > 3) {
					alert("You can only have 4 people per room");
					return room;
				}

				console.log(`${value} checked in to room ${id} on ${dateTime}`)
				room.people.push(value);
			}
			return room;
		}) })
	}

	// RemovePerson is similar to addperson, but in here we have extra if statements
	// These statements are used to validate the textinput coming from the site, for example
	// if the user inputs *, we set the room to empty, and by returning room skips the rest of the code.

	removePerson = (id, value) => {
		
		let today = new Date();
		let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
		let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		let dateTime = date + " " + time;

		this.setState({ rooms: this.state.rooms.map(room => {
			if (room.id === id) {
				let itemCount = null;
				if (value === "*") {
					room.people = [];
					console.log(`Everyone was removed from room ${id} on ${dateTime}`);
					return room;
				} else if (isNaN(value)) {
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
				console.log(`${value} was removed from room ${id} on ${dateTime}`)
			}
			return room;
		}) })
	}

	// This just inverts the current value.

	lock = (id) => {

		let today = new Date();
		let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
		let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		let dateTime = date + " " + time;

		this.setState({ rooms: this.state.rooms.map(room => {
			if (room.id === id) {
				console.log(`${!room.isCleaning ? "Locked" : "Unlocked"} room ${id} at ${dateTime}`);
				room.isCleaning = !room.isCleaning
			}
			return room;
		}) })
	}

	// Here we add the main component and start the rendering process.

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
