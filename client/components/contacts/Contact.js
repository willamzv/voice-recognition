import React from 'react';
import Trash from 'react-icons/lib/md/delete';
import md5 from 'js-md5';

const Contact = ({ name, email }) => (
  <div className="col s12 m4">
    <div className='card blue-grey darken-1'>
    <div className="card-image">
      <img src={`https://www.gravatar.com/avatar/${md5(email)}`}></img>
    </div>
      <div className='card-content black-text'>
        <span
          className="card-title"
        >
          {name}
        </span>
        <p>{email}</p>
      </div>
    </div>
  </div>
);

export default Contact;
