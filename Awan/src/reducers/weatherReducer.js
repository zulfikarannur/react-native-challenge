const initialState = {
  cityWeather: {}
}

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_WEATHER':
      return {
        ...state, cityWeather: action.payload.weather
      }
    default:
      return state
  }
}

export default weatherReducer
