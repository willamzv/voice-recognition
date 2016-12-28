import React from 'react';
import { connect } from 'react-redux';
import NoteApp from './note/NoteApp.js';


class Notes extends React.Component{
  componentDidMount() {
    artyom.initialize({
      lang:"en-US",// A lot of languages are supported. Read the docs !
      continuous:true,// Artyom will listen forever
      listen:true, // Start recognizing
      debug:true, // Show everything in the console
      speed:1, // talk normally
      soundex:true,
      executionKeyword: 'now',
      obeyKeyword: "Alexa",
    });
  }

  render(){
    return(
      <div>
        <NoteApp />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Notes)
