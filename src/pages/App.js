import React, { Component } from 'react';
import './App.css';
import github from '../assets/github.png';
import api from '../services/api';
import Profile from '../components/Profile';
import Repository from '../components/Repository';

class App extends Component {

  constructor() {
    super();

    this.state = {

      github: {
        client_id: 'f593d684f70a31d3acc1',
        client_secret: '551c39e0aa279f6d5244a4a50834b5cfd21ce8ed',
      },

      user: [],
      repos: []
    }
  }

  getUser = (e) => {
    const user = e.target.value;
    const { client_id, client_secret } = this.state.github;

    api.get(`/users/${user}?client_id=${client_id}&client_secret=${client_secret}`)
      .then(({ data }) => this.setState({ user: data }))

    api.get(`/users/${user}/repos?client_id=${client_id}&client_secret=${client_secret}`)
      .then(({ data }) => this.setState({ repos: data }))

  }

  renderProfile = () => {
    const { user, repos } = this.state;

    return (

      <div className="render-profile">

        <div className="profile">
          <Profile user={user} />
        </div>

        <div className="repos">
          <p className="repo"><span className="repo-title">Repositories</span></p>
          <input 
          // onChange={this.getRepo} 
          className="find-repo" type="text" placeholder="Find a repository..." />
           {repos.map(repo => <Repository key={repo.name} repo={repo} />)}
        </div>
        
      </div>

    )
  }

  render() {

    // console.log(this.state.user);
    // const {user} = this.state; //desestrutura o estado
    // const {repos} = this.state;

    return (
      <div className="App">
        <div className="search-bar">
          <img className="github-icon" src={github} alt="github icon" />
          <input onChange={this.getUser} className="search" type="text" placeholder="Search or jump to..." />
        </div>
        <div className="wrapper">

          {/* 
          passa o user como props para o profile
          {user.length !== 0 ? <Profile user = {user} /> : null}  */}

          {this.state.user.length !== 0 ? this.renderProfile() : null}

        </div>
      </div>
    );
  }
}

export default App;
