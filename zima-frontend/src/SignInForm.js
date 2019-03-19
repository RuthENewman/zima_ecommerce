import React, { Component } from 'react';
import API from './API';

class SignInForm extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = () => {
    const user = this.state
    API.signin(user)
      .then(data => {
        if (data.error) {
          alert('Wrong!')
        } else {
          this.props.signin(data.email)
        }
      })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {
    return (
      <div>
        <form className="signin_form">
          <p><label>Email address</label></p>
          <input
          id='emailInput'
          value={this.state.email}
          onChange={this.handleChange}
          margin='normal'
          name='email'
          ></input>
          <p><label>Password</label></p>
          <input
          id='passwordInput'
          value={this.state.password}
          onChange={this.handleChange}
          margin='normal'
          name='password'
          type='password'
          ></input>
          <br/>
          <button
          onClick={this.handleSubmit}
          type="submit"
          className="cart_button"
          >Log in</button>
        </form>
      </div>
    )
  }

}

export default SignInForm;
