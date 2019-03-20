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
      <div id="create_account_form">
        <form>
          <label className="category_eng">First name</label>
          <input
          type="text"
          ></input>
          <label className="category_eng">Last name</label>
          <input
          type="text"
          ></input>
          <label className="category_eng">Email</label>
          <input
          type="email"
          >
          </input>
          <button
            type="submit"
          >Create an account</button>
        </form>
      </div>
    )
  }

}

export default CreateAccount;
