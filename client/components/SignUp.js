import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let { email, password, fullname } = this.refs;

    $.ajax({
      url: '/api/auth/signup',
      type: 'POST',
      data: { email: email.value, password: password.value, fullname: fullname.value },
      dataType: 'JSON'
    }).done( user => {
      this.props.dispatch(refreshLogin(user));
      this.props.router.push('/dashboard');
    }).fail( err => {
      //A great place to dispatch flash actions
    });
  }

  render() {
    return (
      <div className="animated bounceInDown row">
        <div className="f-container">
          <section id="f-content">
            <form onSubmit={this.handleSubmit}>
              <h1>Sign Up</h1>
              <div className="input-field row">
                <i className="material-icons prefix">account_circle</i>
                <input id="icon_prefix" className="validate" type="text" ref="fullname" required={true} />
                <label className="left-align" htmlFor="icon_prefix">User's Name</label>
              </div>
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
              <button className="col s12 m12 left btn red waves-effect waves-light">Sign Up</button>
            </form>
          </section>
        </div>
      </div>
    )
  }
}

export default connect()(SignUp);
