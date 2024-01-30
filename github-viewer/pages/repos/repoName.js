import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getRepository } from '../../utils/githubApi';
import RepoDetail from '../../components/RepoDetail';

const RepoDetailPage = () => {
  const router = useRouter();
  const { repoName } = router.query;
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Replace 'YOUR_GITHUB_USERNAME' and 'YOUR_GITHUB_TOKEN' with your GitHub username and token
      const owner = 'hasina-md';
      const token = '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';

      const fetchedRepo = await getRepository(owner, repoName, token);
      setRepo(fetchedRepo);
    };

    if (repoName) {
      fetchData();
    }
  }, [repoName]);

  if (!repo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <RepoDetail repo={repo} />
    </div>
  );
};

export default RepoDetailPage;
