import {StackNavigator} from 'react-navigation'

import Home from '../screens/Home'
import Detail from '../screens/Detail'

const AppNavigator = StackNavigator({
  Home: {screen: Home},
  Detail: {screen: Detail}
}, {
  headerMode: 'none'
})

export default AppNavigator
