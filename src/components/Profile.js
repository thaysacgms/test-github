import React from 'react';
import api from '../services/api';
import local from '../assets/local.svg';
import './Profile.css';

// const getRepo = (e) => {
//   const user = e.target.value;
//   const {client_id, client_secret} = this.state.github;

//   api.get(`/users/${user}?client_id=${client_id}&client_secret=${client_secret}`)
//   .then(({data}) => this.setState({ user: data }))
// }

export default function Profile({ user }) {

  return (
    <div className="profile-wrapper">
      <div className="column-1">
        <img className="user-img" src={user.avatar_url} alt="User image" />
        <p className="name"><strong>{user.name}</strong></p>
        <p className="username">{user.login}</p>
        <p className="bio">{user.bio}</p>
        <div className="localization">
          <img className="local-icon" src={local} alt="Icon" />
          <p className="local">{user.location}</p>
        </div>
        <p>Repositories: {user.public_repos}</p>
        <p>Following: {user.following}</p>
        <p>Seguidores: {user.followers}</p>
      </div>

    </div>
  );
}
