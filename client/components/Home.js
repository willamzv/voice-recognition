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
          <div className="container">
            <h4 className="white-text">ABOUT NOVA</h4>
            <div className="section-text white-text">
              <p>The sky is so tragically beautiful.
                A graveyard of stars</p>
            </div>
            <footer className="white-text">Anonymous</footer>
            <br />
            <div className="info white-text">
              <p>Nova is your personal assistant, a web application with the ability to understand voice orders such as browsing the website, obeying voice commands such as adding notes and even searching for videos on youtube</p>
            </div>
            <br />
            <div className="info white-text">
              <p></p>
            </div>
          <br />
            <div className='row row-about'>

              <div className="card col s9 m3">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src="images/space.png"/>
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                  <p><a href="#">This is a link</a></p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
              </div>

              <div className="card col s9 m3">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src="images/space.png"/>
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                  <p><a href="#">This is a link</a></p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
              </div>

              <div className="card col s9 m3">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src="images/space.png"/>
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                  <p><a href="#">This is a link</a></p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
              </div>
            </div>
          </div>
      )
    default:
      return (
        <div>
          <div className="animated fadeInLeftBig">
            <h1 className="white-text">Welcome to Nova</h1>
          </div>
          <div>
            <h3 className="animated fadeInRight white-text">Nova is your personal assistant</h3>
            <h4 className="animated fadeInUp white-text" >A web application with the ability to understand voice commands</h4>
          </div>
          <br/>
          <Link to="/signin"><button className="animated zoomIn btn white-text">Sign In</button></Link>
          <Link to="/signup"><button className="animated zoomIn btn red white-text">Sign Up</button></Link>
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
