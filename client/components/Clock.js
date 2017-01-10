import React from 'react';
import { connect } from 'react-redux';
import { setClock } from '../actions/actions.js'


class Clock extends React.Component{
  componentDidMount(){
    artyom.fatality();
    setTimeout(()=>{
      artyom.initialize({
        lang:"en-US",// A lot of languages are supported. Read the docs !
        continuous:true,// Artyom will listen forever
        listen:true, // Start recognizing
        debug:false, // Show everything in the console
        speed:1, // talk normally
        soundex:true,
        executionKeyword: 'now',
        obeyKeyword: "Nova",
      });
    },1000);
  }
  constructor(props){
    super(props)
    this.getTime = this.getTime.bind(this)
  }
  getTime(){
    const
      takeTwelve = n => n > 12 ?  n  - 12 : n,
      addZero = n => n < 10 ? "0" +  n : n;

      setInterval(() => {
        let d, h, m, s, t, t1,amPm;
        d = new Date();
        h = addZero(takeTwelve(d.getHours()));
        m = addZero(d.getMinutes());
        s = addZero(d.getSeconds());
        t = `${h}:${m}:${s}`;
        t1 = `${h}:${m}`
        amPm = d.getHours() >= 12 ? "pm" : "am";
        let timer = { t, t1, amPm }
        this.props.dispatch(setClock(timer))

    }, 1000);
  }

  render () {
    this.getTime()
    let { t, t1, amPm } = this.props.time
    return (
      <div className="outer">
        <div className="inner">
          <div className="most-inner">
            <span>
              {t}
            </span>
            <span className="amPm">
              {amPm}
            </span>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    time: state.time,
    user: state.user
  }
}


export default connect(mapStateToProps)(Clock);
