import React from 'react';
import { connect } from 'react-redux';
import ContactApp from './contacts/ContactApp';


class Contacts extends React.Component{
  componentDidMount() {
    artyom.initialize({
      lang:"en-US",// A lot of languages are supported. Read the docs !
      continuous:true,// Artyom will listen forever
      listen:true, // Start recognizing
      debug:true, // Show everything in the console
      speed:1, // talk normally
      soundex:true,
      executionKeyword: 'now'
    });
  }

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
