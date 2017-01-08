import React from 'react';
import AddNote from './AddNote';
import NoteList from './NoteList';
import Footer from './Footer';
import { connect } from 'react-redux';
import { fetchNotes } from '../../actions/actions.js';

class NoteApp extends React.Component {
  componentDidMount(){
    this.props.dispatch(fetchNotes());
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
    },1000);
  }

  render() {
    return (
      <div className="center row">
        <AddNote />
        <NoteList />
      </div>
    )
  }
}

export default connect()(NoteApp);
