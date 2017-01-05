import React from 'react';
import { connect } from 'react-redux';
import ContactApp from './contacts/ContactApp';


class Contacts extends React.Component{
  render(){
    return(
      <div>
        <ContactApp />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Contacts)
