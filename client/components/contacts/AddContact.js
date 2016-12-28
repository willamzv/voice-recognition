import React from 'react';
import { connect } from 'react-redux';
import { addContact } from '/Users/Willam/Documents/capstone/client/actions/actions.js';

const AddContact = ({ dispatch }) => {
  let commands = {
      smart:true,
      indexes:["new contact *"], // These spoken words will trigger the execution of the command
      action:(i,wildcard) =>{ // Action to be executed when a index match with spoken word
          dispatch(addContact(wildcard)),
          artyom.say(wildcard)
      }
  };
  artyom.addCommands(commands)

  let name;
  let email
  return (
    <div className="col m10 offset-m1">
      <input ref={ n => { name = n }} />
      <input ref={ e => { email = e}} />
      <button
        className="btn"
        onClick={ () => {
          dispatch(addContact(name.value,email.value));
          artyom.say(name.value);
          name.value = null;
          email.value = null
        }}
      >
        Add Contact
      </button>
    </div>
  )
}

export default connect()(AddContact);
