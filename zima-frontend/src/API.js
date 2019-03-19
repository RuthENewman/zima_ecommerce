class API {
  static signin (user) {
    return fetch('http://localhost:3001/api/v1/signin', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    }).then(resp => resp.json())

  }



}

export default API;
