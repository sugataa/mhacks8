import React from 'react';

const notes = [
  {
    id: '4e81fc6e-bfb6-419b-93e5-0242fb6f3f6a',
    task: 'Learn React'
  },
  {
    id: '11bbffc8-5891-4b45-b9ea-5c99aadf870f',
    task: 'Do laundry'
  }
];

export default ({task, onDelete}) => (
       <div>
	<span>{task}</span>
       	<button onClick={onDelete}>x</button>
       </div>
);

export default ({notes, onDelete=() => {}}) => (
       <ul>{notes.map(({id, task}) =>
          <li key={id}>
	    <Note
	      onDelete={onDelete.bind(null, id)}
	      task={task} />
	 </li>
       )}</ul>
)