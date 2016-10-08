import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';

export default class App extends React.component {
    constructor(props) {}
    render() {
	const {notes} = this.state;

	return (
	   <div>
		<button onClick={this.addNote}>+</button>
		<Notes notes={notes} onDelete={this.deleteNote} />
	   </div>
	);

    },
    addNote = () => {}


    deleteNote = (id, e) => {
	e.stopPropagation();

	this.setState({
	    notes: this.state.notes.filter(note => note.id !== id)
	});
    }
}
