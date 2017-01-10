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
        <div className="col m3 l3 s12 note-pad animated bounceInUp">
          <div>
            <h1 className="center">Notes</h1>
            <p>Welcome to Notes App. You can add notes with your voice just saying the command New Note or Create Note and the text of the note that you want to add</p>
            <br/>
            <p>Sample:  New Note Buy Milk</p>
            <br/>
            <hr/>
            <p>You can create also new notes using the form bellow</p>
          </div>
          <AddNote />
        </div>
        <div className="bgstick col m9 l9 s12 animated bounceInDown">
          <NoteList />
        </div>
      </div>
    )
  }
}

export default connect()(NoteApp);
