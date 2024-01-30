import React from 'react';
import Link from 'next/link';

const RepoList = ({ repositories }) => {
  return (
    <div>
      <h2>Repository List</h2>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>
            <Link href={`/repos/${repo.owner.login}/${repo.name}`}>
              <a>{repo.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoList;
