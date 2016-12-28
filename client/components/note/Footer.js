import React from 'react';
import Filter from './Filter';

const Footer = () => (
  <p  className="col m10 offset-m1">
    Show:
    {' '}
    <Filter filter='SHOW_ALL'>All</Filter>
    {' '}
    <Filter filter='SHOW_ACTIVE'>Active</Filter>
    {' '}
    <Filter filter='SHOW_COMPLETED'>Completed</Filter>
  </p>
);

export default Footer
