import React from 'react';
import './App.css';
import user from '../assets/eu.png';
import local from '../assets/local.svg';
import github from '../assets/github.png';
import Repository from '../components/Repository';

function App() {
  return (
    <div className="App">
      <div className="search-bar">
        <img className="github-icon" src={github}/>
        <input className="search" type="text" placeholder="Search or jump to..."/>
      </div>
      <div className="wrapper">
      <div className="column-1">
        <img className="user-img" src={user}/>
        <p className="name"><strong>Thaysa Gomes</strong></p>
        <p className="username">thaysacgms</p>
        <p className="bio">Estudante de Análise e Desenvolvimento de Sistemas (IFPE).</p>
        <div className="localization">
        <img className="local-icon" src={local}/>
        <p className="local">Recife, Brasil</p>
        </div>
      </div>
      <div className="column-2">
      <div className="repos">
        <p className="repo-title">Repositories</p>
        <input className="find-repo" type="text" placeholder="Find a repository..."/>
        <Repository/>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
