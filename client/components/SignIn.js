import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';
import { Link } from 'react-router';
import { setFlash } from '../actions/flash'

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
      this.props.dispatch(setFlash("Email or Password invalid", "error"))
    });
  }

  render() {
    return (
      <div className="animated zoomInUp row">
        <div className="f-container center col m4 offset-m4 s12 l4 offset-l4">
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
