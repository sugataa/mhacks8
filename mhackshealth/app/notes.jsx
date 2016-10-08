import React from 'react';

const = [
      {
            id: '412fafgnr32kjbfasdbfiyrh2n-faDFffasdf',
	     task: 'Learn React'
      },
      {	
	id:'1243nfh0u4-fasdfu5-as45',
	task: 'do laundry'
      }
};

export default () => (
  <ul>{notes.map(note =>
       <li key={note.id}>{note.task}</li>
       )}</ul>
       )
