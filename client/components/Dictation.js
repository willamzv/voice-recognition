import React from 'react';
import { connect } from 'react-redux';

class Dictation extends React.Component{
  constructor(props){
    super(props);
    this.toText = this.toText.bind(this);
    this.state = { script: "" }

  }
  componentDidMount(){
    artyom.fatality();
  }
  toText(t){
    this.setState({script:t})
  }
  UserDictation = artyom.newDictation({
    continuous:true, // Enable continuous if HTTPS connection
    onResult:(text)=> {
        // Do something with the text
        this.toText(text);
        console.log(text);
    },
    onStart:() => {
        console.log("Dictation started by the user");
    },
    onEnd:() => {
        alert("Dictation stopped by the user");
    }
});

  render(){
    return (
    <div>
      <div className="col m10 offset-m1">
        <input type='button' className="btn" onClick={() => this.UserDictation.start()} value="Start"/>
        <input type='button' className="btn red" onClick={() => this.UserDictation.stop()} value="Stop"/>
      </div>
      <div>
        {this.state.script}
      </div>
    </div>
  )
  }
}

export default connect()(Dictation);
