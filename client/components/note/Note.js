import React from 'react';
import Trash from 'react-icons/lib/md/delete';

const Note = ({ onClick, completed, text }) => (
  <li>
    <Trash className="right blue-text" onClick={onClick} style={{fontSize: '25px'}}/>
    {text}
  </li>
);

export default Note;
