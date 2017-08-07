import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addNavigationHelpers} from 'react-navigation'

import AppNavigator from './config/router'

class Navigator extends Component {
  render () {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        state: this.props.state,
        dispatch: this.props.navReducer
      })} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    navReducer: state.navReducer
  }
}

export default connect(mapStateToProps)(Navigator)
