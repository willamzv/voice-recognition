import React from 'react';
import Trash from 'react-icons/lib/md/delete';
import md5 from 'js-md5';

const Contact = ({ onClick,name, email }) => (
  <div className="col contacts s12 m4 l3">
    <div className='card blue-grey darken-1'>
    <div className="card-image">
      <img src={`https://www.gravatar.com/avatar/${md5(email)}`}></img>
    </div>
      <div className='card-content black-text'>
        <span
          className="card-title"
        >
          <Trash className="right blue-text" onClick={onClick} style={{fontSize: '25px'}}/>
          {name}
        </span>
        <p>{email}</p>
      </div>
    </div>
  </div>
);

export default Contact;
