import React from 'react';
import { connect } from 'react-redux';
import NoteApp from './note/NoteApp.js';


class Notes extends React.Component{
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
