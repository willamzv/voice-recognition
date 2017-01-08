import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logout } from '../actions/auth';
import Flash from '../components/Flash';
import { refreshLogin } from '../actions/auth';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.navs = this.navs.bind(this);
    this.logout = this.logout.bind(this);
    this.sayTime = this.sayTime.bind(this);
  }

  componentDidMount() {
    window.jQuery('.button-collapse').sideNav();
    this.props.dispatch(refreshLogin());
  }

  logout(e) {
    e.preventDefault();
    this.props.dispatch(logout(this.props.router));
  }

  navs() {
    switch(this.props.user.role) {
      case 'user':
        return (
          <div>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/notes">Notes</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            <li><Link to="/ytvoice">YTube Voice</Link></li>
            <li><Link to='/dictation'>Dictation</Link></li>
            <li><a style={{ cursor: 'pointer' }} onClick={this.logout}>Logout</a></li>
          </div>
        )
      case 'admin':
        return (
          <div>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/admin">Admin</Link></li>
            <li><a style={{ cursor: 'pointer' }} onClick={this.logout}>Logout</a></li>
          </div>
        )
      default:
        return (
          <div>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/signin">Sign In</Link></li>
          </div>
        )
    }
  }

  sayTime(){
    artyom.say("It is" + this.props.time.t1 + this.props.time.amPm)
  }

  render() {
    console.log(this.props.router.routes[0].childRoutes)
    let commands = {
      indexes:["go to notes","go to contacts","go to dashboard","go to youtube","logout","what time is it","time"],
      action:(i) =>{
        switch (i) {
          case 0:
            return this.props.router.push("/notes");
          case 1:
            return this.props.router.push("/contacts")
          case 2:
            return this.props.router.push("/dashboard")
          case 3:
            return this.props.router.push("/ytvoice")
          case 4:
            return this.props.dispatch(logout(this.props.router));
          case 5:
            return this.sayTime();
          case 6:
            return this.sayTime()
          default:
            return artyom.say("I cannot find the route")
          }
        }
    };
    artyom.addCommands(commands)
    return (
      <div>
        <nav className="purple">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">Nova</Link>
            <a href="#" data-activates="mobile" className="button-collapse">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              {this.navs()}
            </ul>
            <ul className="side-nav" id="mobile">
              {this.navs()}
            </ul>
          </div>
        </nav>
        <Flash />
        { this.props.children }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    time: state.time
  }
}

export default connect(mapStateToProps)(App);
