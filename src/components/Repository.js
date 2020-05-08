import React from 'react';
import './Repository.css';


export default function Repository({ repo }) {
    return (
        <div className="repository">
            <a href={repo.html_url} target="_blank"><h2 className="repo-name"><strong>{repo.name}</strong></h2></a>
            <p className="description">{repo.description}</p>
            <p className="language">Language: {repo.language}</p>
            <hr className="line"></hr>
        </div>
    );
}
