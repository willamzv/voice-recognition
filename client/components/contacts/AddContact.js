import React from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../actions/actions.js';



const AddContact = ({ dispatch }) => {
  let commands = {
      smart:true,
      indexes:["new contact *"], // These spoken words will trigger the execution of the command
      action:(i,wildcard) =>{ // Action to be executed when a index match with spoken word
        artyom.newPrompt({
          question:"Do you want to add an email?",
          options:["Yes","No"],
          beforePrompt:function(){
            console.log("Before ask");
          },
          onStartPrompt:function(){
            console.log("The prompt is being executed");
          },
          onEndPrompt:function(){
            console.log("The prompt has been executed succesfully");
          },
          onMatch:function(i){ // i returns the index of the given options
            var action;
              if(i == 0){
                action = function(){
                  let em = prompt("Please enter contact email:","sample@email.com")

                  dispatch(addContact(wildcard,em));
                  artyom.say("Contact added: " + wildcard);
                }
              }

              if(i == 1){
                action = function(){
                  dispatch(addContact(wildcard,""))
                  artyom.say("Contact added:" + wildcard + ", without email");
              }
            }

            return action // A function needs to be returned in onMatch event
                       // in order to accomplish what you want to execute
          }
});
      }
  };
  artyom.addCommands(commands)

  let name,email;
  return (
    <div>
      <div className="col m10 offset-m1">
        <input ref={ n => { name = n }} placeholder="Name" />
        <input ref={ e => { email = e}} placeholder="Email" />
        <button
          className="btn-floating btn-large blue"
          onClick={ () => {
            dispatch(addContact(name.value,email.value));
            artyom.say(name.value);
            name.value = null;
            email.value = null
        }}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default connect()(AddContact);
