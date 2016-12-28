import React from 'react';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { connect } from 'react-redux';
import { fetchContacts } from '/Users/Willam/Documents/capstone/client/actions/actions.js';

class ContactApp extends React.Component {
  componentDidMount(){
    this.props.dispatch(fetchContacts());
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
