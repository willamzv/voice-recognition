import React from 'react';
import { connect } from 'react-redux';
import Dictation from './Dictation'
import Clock from './Clock'
import Weather from './Weather'
import Youtb from './Youtb'

const Dashboard = ({ user }) => (
  <div>
    <Clock />
    <Weather />
  </div>
);

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Dashboard);
