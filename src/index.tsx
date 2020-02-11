import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

type User = {
  avatar_url: string;
  bio: string;
  blog: string;
  company: string;
  created_at: string;
  email: string;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: boolean;
  html_url: string;
  id: number;
  location: string;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  updated_at: string;
  url: string;
};

const endpoint = 'https://api.github.com/users/ossan-engineer';

const Root = () => {
  const [user, setUser] = useState<User | null>(null);

  const getUser = async () => {
    const response = await fetch(endpoint);
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    user && (
      <div>
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
        <img src={user.avatar_url} alt="avatar" style={{ height: 50 }} />
      </div>
    )
  );
};
const rootNode = document.getElementById('root');

ReactDOM.render(<Root />, rootNode);
