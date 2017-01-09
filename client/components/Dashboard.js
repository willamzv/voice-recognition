import React from 'react';
import { connect } from 'react-redux';
import Dictation from './Dictation'
import Clock from './Clock'
import Weather from './Weather'
import Youtb from './Youtb'
import FaYoutube from 'react-icons/lib/fa/youtube'
import FaGroup from 'react-icons/lib/fa/group'
import FaEdit from 'react-icons/lib/fa/edit'
import { Link } from 'react-router';
import TiMicrophoneOutline from 'react-icons/lib/ti/microphone-outline';

const Dashboard = ({ user }) => (
  <div>
    <div className="dashwelcome">Welcome,<span>{user.fullname}</span></div>
    <Clock />
    <Weather />
    <div className="icons">
      <span>
        <Link to="/ytvoice"><FaYoutube className="right white-text" style={{fontSize: '70px'}}/></Link>
      </span>
        <span>
          <Link to="/contacts"><FaGroup className="right white-text" style={{fontSize: '70px'}}/></Link>
          </span>
          <span>
            <Link to="/notes"><FaEdit className="right white-text" style={{fontSize: '70px'}}/></Link>
          </span>
          <span>
            <Link to="/dictation"><TiMicrophoneOutline className="right white-text" style={{fontSize: '70px'}}/></Link>
          </span>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Dashboard);
