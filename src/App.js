import React, { Component } from 'react'
import './App.css'
import { getUser } from './api/github'

const renderLine = (user, key) => <li key={key}><b>{key}</b>: {user[key]}</li>

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { user: {} }
  }

  componentDidMount () {
    /*getUser('vnglst').then(data => {
      this.setState({ user: data.entity })
    })*/

fetch('https://enigmatic-lowlands-44758.herokuapp.com/api', {
   //mode: 'no-cors',
  method: 'GET',
  headers: {
    Accept: 'application/json',
  },
},
).then(response => {
	console.log(response)
  if (response.ok) {
    response.json().then(json => {
      console.log(json);
    });
  }
});

  }

  render () {
    const { user } = this.state
    return (
      <div className='App'>
        <ul style={{ listStyle: 'none' }}>
          {
            // Loop over the object keys and render each key
            Object.keys(user).map(key => renderLine(user, key))
          }
        </ul>
      </div>
    )
  }
}

export default App
