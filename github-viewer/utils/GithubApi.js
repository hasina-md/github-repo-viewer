import axios from 'axios';

const getRepositories = async (username, token) => {
  const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const getRepository = async (owner, repoName, token) => {
  const response = await axios.get(`https://api.github.com/repos/${owner}/${repoName}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export { getRepositories, getRepository };
