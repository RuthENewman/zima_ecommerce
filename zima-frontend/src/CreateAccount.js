import React, {Component} from 'react';

class CreateAccount extends Component {
  constructor() {
    super()

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <div id="create_account">
        <h2 className="category_eng">Create a ZIMA account</h2>
        <form id="create_account_form">
          <p><label className="category_eng">First name</label></p>
          <input
          type="text"
          placeholder="Enter your first name"
          id="firstNameInput"
          ></input>
          <p><label className="category_eng">Last name</label></p>
          <input
          type="text"
          placeholder="Enter your last name"
          id="lastNameInput"
          ></input>
          <p><label className="category_eng">Email</label></p>
          <input
          type="email"
          placeholder="Enter your email address"
          id="emailInputCreateAccount"
          >
          </input>
          <p><label className="category_eng">Password</label></p>
          <input
          type="password"
          placeholder="Create a password"
          id="PasswordCreateAccount"
          >
          </input>
          <br/>
          <button
            type="submit"
            id="create_account_btn"
          >Create an account</button>
        </form>
      </div>
    )
  }

}

export default CreateAccount;
