import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header } from './src/components/common'
import LoginFrom from './src/components/LoginForm'

export default class extends Component {
  componentWillMount () {
    firebase.initializeApp(
      {
        apiKey: 'AIzaSyBMSSBJYZ6QQ_pirObCQxbF9Irb9kGzW0M',
        authDomain: 'authjv.firebaseapp.com',
        databaseURL: 'https://authjv.firebaseio.com',
        projectId: 'authjv',
        storageBucket: 'authjv.appspot.com',
        messagingSenderId: '378369850852'
      }
    )
  }
  render () {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginFrom />
      </View>
    )
  }
}
