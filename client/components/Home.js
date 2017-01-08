import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class Home extends React.Component{
  constructor(props){
    super(props);
    this.homepage = this.homepage.bind(this)
  }
  homepage(){
    switch(this.props.user.role) {
      case 'user':
        return (
          <div>
            Hello
          </div>
      )
    default:
      return (
        <div>
          <div>
            <h1 className="white-text">Welcome to Nova</h1>
          </div>
          <div>
            <h3 className="white-text">A React Web Application with Speech Recognition</h3>
          </div>
          <Link to="/signin"><button className="btn white-text" href="/signin">Sign In</button></Link>
        </div>
      )
  }
}

  render(){
    return(
      <div>
        {this.homepage()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Home)
