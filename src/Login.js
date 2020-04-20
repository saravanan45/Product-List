import React, { useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';

function Login({ history }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const pwd = useRef(null);

  const updateUserName = e => {
    setUserName(e.target.value);
  };
  const updatePassword = e => {
    setPassword(e.target.value);
  };
  const submitForm = e => {
    e.preventDefault();
    if (userName === 'admin' && password === 'admin') {
      const loginCredentials = { userName, password };
      localStorage.setItem('UserCredentials', JSON.stringify(loginCredentials));
      return history.push('/home');
    }
    pwd.current.value = '';
    return setError('Invalid UserName/Password');
  };
  return (
    <div className="background">
      <div className="Login">
        <span className="title">Welcome to Fairy Land!</span>
        {error !== '' ? <span className="error-field">{error}</span> : ''}
        <input
          className="input-field"
          type="text"
          name="name"
          placeholder="Username"
          value={userName}
          onChange={e => updateUserName(e)}
        />
        <input
          className="input-field"
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={e => updatePassword(e)}
          ref={pwd}
        />
        <button
          className="button-field"
          type="submit"
          onClick={e => submitForm(e)}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default withRouter(Login);
