import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '/Users/Willam/Documents/capstone/client/actions/actions.js';

const AddNote = ({ dispatch }) => {
  let commands = {
      smart:true,
      indexes:["new note *"], // These spoken words will trigger the execution of the command
      action:(i,wildcard) =>{ // Action to be executed when a index match with spoken word
          dispatch(addNote(wildcard)),
          artyom.say(wildcard)
          artyom.dontObey();
      }
  };
  artyom.addCommands(commands)
  artyom.dontObey();
  let note;
  return (
    <div className="col m10 offset-m1">
      <input ref={ n => { note = n }} />
      <button
        className="btn"
        onClick={ () => {
          dispatch(addNote(note.value));
          artyom.say(note.value);
          note.value = null;
        }}
      >
        Add
      </button>
    </div>
  )
}

export default connect()(AddNote);
