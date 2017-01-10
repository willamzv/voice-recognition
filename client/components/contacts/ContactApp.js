import React from 'react';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { connect } from 'react-redux';
import { fetchContacts } from '../../actions/actions.js';


class ContactApp extends React.Component {
  componentDidMount(){
    this.props.dispatch(fetchContacts());
    artyom.fatality();
    setTimeout(()=>{
      artyom.initialize({
        lang:"en-US",// A lot of languages are supported. Read the docs !
        continuous:true,// Artyom will listen forever
        listen:true, // Start recognizing
        debug:false, // Show everything in the console
        speed:1, // talk normally
        soundex:true,
        executionKeyword: 'now',
        obeyKeyword: "Nova",
      });
    },1000);
  }

  render() {
    return (
      <div className="row">
        <div className="bgstick col m8 s12 l8 animated bounceInDown">
          <ContactList />
        </div>
        <div className="col m4 s12 l4 note-pad animated bounceInUp">
          <div>
            <h1 className="center">Contacts</h1>
            <p>Welcome to Contacts App. You can add new contacts with your voice by saying the command New Contact and the name of the person you want to add, Nova is going to ask you if you want to add an email: if yes, please enter the email on the prompt</p>
            <br/>
            <p>Sample:</p>
              <ul>
                <li>You: New Contact Steve</li>
                <li>Nova: Do you want to add an emial?</li>
                <li>You: Yes/No</li>
              </ul>
            <br/>
            <hr/>
            <p>You can add also new Contacts using the form bellow</p>
          </div>
          <AddContact />
        </div>
      </div>
    )
  }
}

export default connect()(ContactApp);
