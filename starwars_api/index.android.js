/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList
} from 'react-native';
import axios from 'axios';
export default class starwars_api extends Component {
  constructor() {
    super()
    this.state = {
      random_swapi: []
    }
  }
  
  render() {
    console.log(this.state.random_swapi)
    return (
      <View style={styles.container}>
        <Text> Welcome To Starwars API </Text>
        <Button
          onPress={() => this.testButton()}
          title="Get Random Your Starwars"
          color="#000000"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text> {`\n`} </Text>
        <Text> {(this.state.random_swapi.length < 1) ? '' : `the name is : ${this.state.random_swapi.name}`} </Text>
      </View>
    );
  }
  
  testButton() {
    let random = Math.floor(Math.random() * (87 - 1) + 1)
    axios.get(`https://swapi.co/api/people/${random}`)
    .then(res => {
      this.setState({random_swapi: res.data})
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    });
  }
  
  
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

AppRegistry.registerComponent('starwars_api', () => starwars_api);
