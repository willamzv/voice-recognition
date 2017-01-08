import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';
import { Link } from 'react-router';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let { email, password } = this.refs;

    $.ajax({
      url: '/api/auth/signin',
      type: 'POST',
      dataType: 'JSON',
      data: { email: email.value, password: password.value }
    }).done( user => {
      this.props.dispatch(refreshLogin(user));
      this.props.router.push("/dashboard")
    }).fail( err => {
    });
  }

  render() {
    return (
      <div className="animated zoomInUp row">
        <div className="f-container">
          <section id="f-content">
            <form onSubmit={this.handleSubmit}>
              <h1>Sign In</h1>
              <div className="input-field row">
                <i className="material-icons prefix">email</i>
                <input id="icon_prefix" className="validate" type="email" required={true} ref="email"/>
                <label className="left-align" htmlFor="icon_prefix">Email</label>
              </div>
              <div className="input-field row">
                <i className="material-icons prefix">lock_outline</i>
                <input id="icon_prefix" type="password" required={true} ref="password" />
                <label className="left-align" htmlFor="icon_prefix">Password</label>
              </div>
              <button className="col m12 s12 left btn blue waves-effect waves-light">Sign In</button>
            </form>
            <div className="signup col m12 s12">Don't have an account yet? <Link to="/signup">Sign Up</Link></div>
          </section>
        </div>
      </div>
    )
  }

}

export default connect()(SignIn);
