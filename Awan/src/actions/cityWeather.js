import axios from 'axios'

export const getWeather = (weather) => {
  return {
    type: 'GET_WEATHER',
    payload: {
      weather: weather
    }
  }
}

export const getWeatherAsync = (query) => {
  return (dispatch) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=0b06b250056f3bd52c625b8aff7ad9fb`)
    .then((resp) => {
      dispatch(getWeather(resp.data))
    })
    .catch((err) => {
      console.log(err)
    })
  }
}
