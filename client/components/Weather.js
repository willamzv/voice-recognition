import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.getWeather = this.getWeather.bind(this)
    this.state = {
      location: '', wx: '', humidity: '', temp: ''
    }
  };

  componentDidMount() {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=salt+lake+city&appid=8ef93e169d7faacbc87963441582f7b4`
    fetch(url)
    .then((response) => {
      return response.json();
    }).then((json) => {
      console.log(json);
      console.log(json.weather[0].icon)
      this.setState({location: json.name, wx: json.weather[0].description, humidity: json.main.humidity, temp: json.main.temp})
    })
  }


  getWeather(city){
    let url = `http://api.openweathermap.org/data/2.5/weather?&appid=8ef93e169d7faacbc87963441582f7b4&q=${city}`
    fetch(url)
    .then((response) => {
      return response.json();
    }).then((json) => {
      console.log(json);
      console.log(json.weather[0].icon)
      this.setState({location: json.name, wx: json.weather[0].description, humidity: json.main.humidity, temp: json.main.temp})
      artyom.say("In" + this.state.location + "is" + Math.round(this.state.temp * 9/5 -459.67) + "Fahrenheit with" + this.state.wx )
    })
  }


  render() {
    let fa = Math.round(this.state.temp * 9/5 -459.67)
    let commands = {
        smart:true,
        indexes:["what is the weather in *"], // These spoken words will trigger the execution of the command
        action:(i,wildcard) =>{ // Action to be executed when a index match with spoken word
            this.getWeather(wildcard)

        }
    };
    artyom.addCommands(commands)



    return (
      <div className="back-temp"> 
        <div className="location">{this.state.location}&nbsp;Weather!</div>
        <div className="weather">{this.state.wx}</div>
        <div className="humidity">{this.state.humidity} %</div>
        <div className="temp">{fa}&deg;&nbsp;Fahrenheit</div>
      </div>
    )
  }
}

export default Weather
