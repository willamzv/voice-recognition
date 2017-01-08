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
        debug:true, // Show everything in the console
        speed:1, // talk normally
        soundex:true,
        executionKeyword: 'now',
        obeyKeyword: "Nova",
      });
    },2000);
  }

  render() {
    return (
      <div className="center row">
        <AddContact />
        <ContactList />
      </div>
    )
  }
}

export default connect()(ContactApp);
