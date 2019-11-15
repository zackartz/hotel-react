import React, { Component } from 'react';
import './App.css';
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
			},			{
				id: 3,
				people: [],
				isCleaning: false
			},			{
				id: 4,
				people: [],
				isCleaning: false
			},			{
				id: 5,
				people: [],
				isCleaning: false
			},			{
				id: 6,
				people: [],
				isCleaning: false
			}		
		]
	}

	render() {
    	return (
        	<div className="App">
        		<RoomList rooms={this.state.rooms} />
        	</div>
    	);
	}
}

export default App;
