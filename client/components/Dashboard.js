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
  <div className="row">
    <div className="col l3 m3 s12 animated bounceInUp note-pad">
      <h1 className="center">Dashboard</h1>
      <p>In the Dashboard you can ask Nova about the local time and the weather in any city</p>
      <p>You can also navigate through the different components with your voice</p>
      <br/>
      <hr/>
      <h6>Samples:</h6>
      <ul>
        <li>What time is it?</li>
        <li>What is the Weather in London</li>
        <li>Go to Notes</li>
      </ul>
    </div>
    <div className="bgstick col l9 m9 s12">
      <div className="white-text animated flipInX">
        <Clock />
        <h1 className="dashwelcome center">Welcome <span>{user.fullname}</span></h1>
      </div>
      <div className="animated flipInX">
        <Weather />
      </div>
      <div className="icons">
        <Link to="/ytvoice"><FaYoutube className="right white-text animated flipInY" style={{fontSize: '75px'}}/></Link>
        <Link to="/contacts"><FaGroup className="right white-text animated flipInY" style={{fontSize: '75px'}}/></Link>
        <Link to="/notes"><FaEdit className="right white-text animated flipInY" style={{fontSize: '75px'}}/></Link>
        <Link to="/dictation"><TiMicrophoneOutline className="right white-text animated flipInY" style={{fontSize: '75px'}}/></Link>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Dashboard);
