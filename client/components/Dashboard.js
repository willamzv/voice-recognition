import React from 'react';
import { connect } from 'react-redux';

const Dashboard = ({ user }) => (
  <div>
  </div>
);

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Dashboard);
