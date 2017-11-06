import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header, Button, Spinner, CardSection } from './src/components/common'
import LoginFrom from './src/components/LoginForm'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loggedIn: null

    }
  }

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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }
    })
  }

  renderContent () {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        )
      case false:
        return (<LoginFrom />)
      default:
        return (<View style={{justifyContent: 'center', alignItems: 'center', height: 100}}><Spinner /></View>)
    }
  }

  render () {
    return (
      <View style={{height: 20}}>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    )
  }
}
