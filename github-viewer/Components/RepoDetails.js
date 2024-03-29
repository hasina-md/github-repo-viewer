import React from 'react';

const RepoDetail = ({ repo }) => {
  return (
    <div>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <p>Language: {repo.language}</p>
      <p>Stars: {repo.stargazers_count}</p>
      
    </div>
  );
};

export default RepoDetail;
