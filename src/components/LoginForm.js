import React, { Component } from 'react'
import { Button, Card, CardSection, Input } from './common'
import firebase from 'firebase'

class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      emailText: '',
      password: ''
    }
  }

  onButtonPress () {
    const { email, password } = this.state
    firebase.auth().signInWithEmailAndPassword(email, password)
  }

  render () {
    return (
      <Card>
        <CardSection>
          <Input
            secureTextEntry={false}
            placeHolder='user@gmail.com'
            label={'Email'}
            value={this.state.emailText}
            onChangeText={emailText => this.setState({emailText})}
           />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeHolder='password'
            label={'Password'}
            value={this.state.password}
            onChangeText={password => this.setState({password})}
           />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm
