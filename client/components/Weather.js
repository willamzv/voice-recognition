import React from 'react'
import Forecast from 'react-forecast'

class Weather extends React.Component{
  render(){
    console.log(this.props)
    return(
      <Forecast latitude={40.75} longitude={-111.88} name="Salt Lake City" />
    )
  }
}

export default Weather
