import React from 'react';
import Note from './Note';
import { connect } from 'react-redux';
import { deleteNote,toggleNote, getVisible } from '../../actions/actions.js';


const NoteList = ({ notes, dispatch }) => (
  <ul className="col m10 offset-m1 note">
    { notes.map ( note =>
      <Note
        key={note._id}
        {...note}
        onClick={ () => dispatch(deleteNote(note._id)) }
      />
    )}
  </ul>
)

const mapStateToProps = (state) => {
  return {
    notes: getVisible(state.notes, state.filter)
  }
}

export default connect(mapStateToProps)(NoteList);
