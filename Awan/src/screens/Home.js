import React, {Component} from 'react'
import {AppRegistry, StyleSheet} from 'react-native'
import {Container, Header, Content, Body, Title, Form, Item, Label, Input, Text, Button} from 'native-base'
import axios from 'axios'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      city: '',
      weather: ''
    }
  }

  render () {
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
              <Input value={this.state.city} onChangeText={(text) => {
                this.setState({city: text})
              }} />
            </Item>
          </Form>
          <Button primary onPress={() => {
            this.submitCity()
          }}>
            <Text>Cari Cuaca</Text>
          </Button>
          <Text>{this.state.weather}</Text>
        </Content>
      </Container>
    )
  }

  submitCity () {
    console.log('State', this.state)
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=0b06b250056f3bd52c625b8aff7ad9fb`)
    .then((resp) => {
      console.log(resp.data.weather[0].main)
      this.setState({
        weather: resp.data.weather[0].main
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

const style = StyleSheet.create({
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

AppRegistry.registerComponent('Home', () => Home)
export default Home
