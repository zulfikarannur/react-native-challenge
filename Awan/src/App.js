import React, {Component} from 'react'
import {AppRegistry} from 'react-native'
import {Provider} from 'react-redux'

import store from './stores'
import Navigator from './Navigation'

class Awan extends Component {
  render () {
    <Provider store={store}>
      <Navigator />
    </Provider>
  }
}

AppRegistry.registerComponent('Awan', () => Awan)
