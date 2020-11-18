import React, { Component } from 'react';
import TestData from '../data/Test.json';

export class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    };
    this.baseState = this.state;
  }

  //--Test--
  //handleSubmit(event) {
  //  event.preventDefault()
  //  const data = this.state
  //  console.log("Final data is", data)
  //}

  async handleSubmit(e) {
    e.preventDefault();
    const response = await fetch('api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    });
    this.setState(this.baseState);
    return response.json();
  }

  //testButton() {
  //  alert('test123');
  //}

  handleInputChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Username: </label><input type='text' value={this.state.username} name='username' onChange={this.handleInputChange} /><br/>
          <label>Password: </label><input type='password' value={this.state.password} name='password' onChange={this.handleInputChange}/><br/>
          <input type='submit' value='Login' />
        </form>
      </div>
    )
  }
}

  // Test local json
  //render() {
  //  return(
  //    <div>
  //      {TestData.map((testRecord, index) => {
  //          return <div>
  //            <h2>{testRecord.id}</h2>
  //            <h2>{testRecord.title}</h2>
  //          </div>
  //      })}
  //    </div>
  //  )
  //}

  //constructor(props) {
  //  super(props);
  //  this.state = {
  //    username: '',
  //    password: ''
  //  };
  //  this.handleChange = this.handleChange.bind(this);
  //  this.handleSubmit = this.handleSubmit.bind(this);
  //}

  //handleChange(event) {
  //  this.setState({ value: event.target.value });
  //}

  //handleSubmit(event) {
  //  console.log(this.state.value);
  //  fetch('api/login', {
  //    method: 'POST',
  //    headers: {
  //      'Accept': 'application/json',
  //      'Content-Type': 'application/json',
  //    },
  //    body: JSON.stringify(this.state.value)
  //  });
  //  event.preventDefault();
  //}

  //render() {
  //  return (
  //    <div>
  //      <form onSubmit={this.handleSubmit}>
  //        <label>
  //          Username:
  //          <input type='text' value={this.state.value} onChange={this.handleChange} />
  //        </label>
  //        <label>
  //          Password:
  //          <input type='text' value={this.state.value} onChange={this.handleChange} />
  //        </label>
  //        <input type='submit' value='Submit' />
  //      </form>
  //    </div >
  //  );
  //}

  //componentDidMount() {
  //  fetch('https://jsonplaceholder.typicode.com/todos/1')
  //    .then(res => res.json())
  //    .then(
  //      (result) => {
  //        this.setState({
  //          isLoaded: true,
  //          items: result.items
  //        });
  //      },
  //      (error) => {
  //        this.setState({
  //          isLoaded: true,
  //          error
  //        });
  //      }
  //    )
  //}

  //async postData() {   
  //  await fetch('https://jsonplaceholder.typicode.com/todos/1', {
  //      method: 'POST',
  //      headers: {
  //          'Accept': 'application/json',
  //          'Content-Type': 'application/json',
  //       },
  //          body: JSON.stringify(this.state)
  //  })
  //}
