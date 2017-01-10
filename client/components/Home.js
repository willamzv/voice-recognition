import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class Home extends React.Component{
  constructor(props){
    super(props);
    this.homepage = this.homepage.bind(this)
  }

  componentDidMount(){
    artyom.fatality();
    setTimeout(()=>{
      artyom.initialize({
        lang:"en-US",// A lot of languages are supported. Read the docs !
        continuous:true,// Artyom will listen forever
        listen:true, // Start recognizing
        debug:true, // Show everything in the console
        speed:1, // talk normally
        soundex:true,
        executionKeyword: 'now',
        obeyKeyword: "Nova",
      });
    },1000);
  }

  homepage(){
    switch(this.props.user.role) {
      case 'user':
        return (
          <div className="container">
            <h4 className="white-text">ABOUT NOVA</h4>
            <div className="section-text white-text">
              <p className="quote">The sky is so tragically beautiful.
              A graveyard of stars</p>
            </div>
            <span className="white-text">Anonymous</span>
            <br />
            <div className="info white-text">
              <h5>Nova is your personal assistant, a web application with the ability to understand voice commands</h5>
              <h6>We built Nova to help people with everyday small tasks. Nova can take down quick reminders and save them for you to review later. It can add friend's and co- worker's emails. It can even help you write down your thought's in our dictation page. And when you feel like searching on Youtube for your favorite videos, Nova is also there to help!</h6>
            </div>
            <br />
            <div className="info white-text">
              <p></p>
            </div>
            <br />
          </div>
        )
    default:
      return (
        <div className="row">
          <div className="col s12 m12 l12">
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
        </div>
      )
  }
}

  render(){
    return(
      <div id="hwelcome">
        {this.homepage()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Home)
