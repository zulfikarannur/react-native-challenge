import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import {Container, Header, Content, Body, Title, Form, Item, Label, Input, Text, Button} from 'native-base'
import {connect} from 'react-redux'

import {getWeatherAsync} from '../actions/cityWeather'

import renderIf from '../helper/renderIf'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      query: ''
    }
  }

  render () {
    const {navigate} = this.props.navigation
    return (
      <Container>
        <Header>
          <Body style={style.title}>
            <Title>
              Awan
            </Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Masukkan kota Anda</Label>
              <Input value={this.state.query} onChangeText={(text) => {
                this.setState({query: text})
              }} />
            </Item>
          </Form>
          <Button primary onPress={() => {
            this.props.getWeatherAsync(this.state.query)
          }}>
            <Text>Cari Cuaca</Text>
          </Button>
          <Text>{JSON.stringify(this.props.weatherReducer.cityWeather)}</Text>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cityWeather: state.weatherReducer.cityWeather
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getWeatherAsync: (query) => {
      dispatch(getWeatherAsync(query))
    }
  }
}

const style = StyleSheet.create({
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
