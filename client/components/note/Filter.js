import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../../actions/actions.js';

const Filter = ({ dispatch, active, children, filter }) => {
  if (active)
    return <span>{children}</span>
  return (
    <a href="#"
      onClick={ e => {
        e.preventDefault();
        dispatch(setFilter(filter))
      }}
    >
      {children}
    </a>
  )
}

const mapStateToProps = (state, props) => {
  return {
    active: props.filter === state.filter
  }
}

export default connect(mapStateToProps)(Filter);
