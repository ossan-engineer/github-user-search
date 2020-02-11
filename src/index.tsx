import React, { ChangeEvent, useState, useEffect, useRef } from 'react';
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

const baseUrl = 'https://api.github.com/users';

const Root = () => {
  const [userName, setUserName] = useState('ossan-engineer');
  const [user, setUser] = useState<User | null>(null);

  const inputRef = useRef<any>(null);

  const getUser = async (route: string) => {
    const response = await fetch(`${baseUrl}/${route}`);
    const data = await response.json();
    setUser(data);
  };

  const handleChamgeName = (e: ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);

  const handleClear = () => {
    setUserName('');
    inputRef.current.focus();
  };

  // useEffect(() => {
  //   getUser(userName);
  // }, [userName]);

  return (
    <>
      <input
        onChange={handleChamgeName}
        type="text"
        placeholder="Input name"
        value={userName}
        ref={inputRef}
      />
      <button onClick={() => getUser(userName)}>Search</button>
      <button onClick={handleClear}>Clear</button>
      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          <img src={user.avatar_url} alt="avatar" style={{ height: 50 }} />
        </div>
      )}
    </>
  );
};
const rootNode = document.getElementById('root');

ReactDOM.render(<Root />, rootNode);
