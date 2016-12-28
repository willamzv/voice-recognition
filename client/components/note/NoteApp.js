import React from 'react';
import AddNote from './AddNote';
import NoteList from './NoteList';
import Footer from './Footer';
import { connect } from 'react-redux';
import { fetchNotes } from '/Users/Willam/Documents/capstone/client/actions/actions.js';

class NoteApp extends React.Component {
  componentDidMount(){
    this.props.dispatch(fetchNotes());
  }

  render() {
    return (
      <div className="center row">
        <AddNote />
        <NoteList />
        <Footer />
      </div>
    )
  }
}

export default connect()(NoteApp);
