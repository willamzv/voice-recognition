import React from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import { deleteContact, getVisible } from '../../actions/actions.js';


const ContactList = ({ contacts, dispatch }) => (
  <div className="col m12 s12">
    { contacts.map ( contact =>
      <Contact
        key={contact._id}
        {...contact}
        onClick={ () => dispatch(deleteContact(contact._id)) }
      />
    )}
  </div>
)

const mapStateToProps = (state) => {
  return {
    contacts: getVisible(state.contacts, "SHOW_ALL")
  }
}


export default connect(mapStateToProps)(ContactList);
