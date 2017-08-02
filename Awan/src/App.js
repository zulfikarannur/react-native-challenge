import {AppRegistry} from 'react-native'
import {StackNavigator} from 'react-navigation'

import Home from './screens/Home'

const Awan = StackNavigator({
  HomeScreen: {screen: Home}
}, {
  headerMode: 'none'
})

AppRegistry.registerComponent('Awan', () => Awan)
