import React, { useState, useEffect } from 'react';
import RepoList from '../components/RepoList';
import { getRepositories } from '../utils/githubApi';

const Home = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Replace 'YOUR_GITHUB_USERNAME' and 'YOUR_GITHUB_TOKEN' with your GitHub username and token
      const username = 'hasina-md';
      const token = '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';

      const repos = await getRepositories(username, token);
      setRepositories(repos);
    };

    fetchData();
  }, []);

  return (
    <div>
      <RepoList repositories={repositories} />
    </div>
  );
};

export default Home;
