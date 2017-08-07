import React, {Component} from 'react'
import {Text} from 'native-base'
import {connect} from 'react-redux'

class Detail extends Component {
  render () {
    return (
      <Text>Ini Detail</Text>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cityWeather: state.weatherReducer.cityWeather
  }
}

export default connect(mapStateToProps)(Detail)
