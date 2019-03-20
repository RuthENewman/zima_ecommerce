class API {
  static signin (user) {
    return fetch('http://localhost:3001/api/v1/signin', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    }).then(resp => resp.json())

  }
  static validate() {
    return this.get('http://localhost:3001/validate')
  }

  static getOrderHistory() {
    return this.get('http://localhost:3001/orderhistory')
  }

  static get(url) {
    return fetch(url, {
      headers: {
        'Authorization': localStorage.getItem('token')
      },
    }).then(response => response.json())
  }

}

window.API = API;

export default API;
