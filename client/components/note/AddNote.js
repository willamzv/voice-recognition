import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../../actions/actions.js';

const AddNote = ({ dispatch }) => {
  let commands = {
      smart:true,
      indexes:["new note *","create note *"], // These spoken words will trigger the execution of the command
      action:(i,wildcard) =>{ // Action to be executed when a index match with spoken word
          dispatch(addNote(wildcard)),
          artyom.say("Note Created: " + wildcard)
      }
  };
  artyom.addCommands(commands)
  let note;
  return (
    <div className="col m10 offset-m1">
      <input ref={ n => { note = n }} required={true} placeholder="Type your note here"/>
      <button
        className="btn-floating btn-large blue"
        onClick={ () => {
          dispatch(addNote(note.value));
          artyom.say(note.value);
          note.value = null;
        }}
      >
        +
      </button>
    </div>
  )
}

export default connect()(AddNote);
