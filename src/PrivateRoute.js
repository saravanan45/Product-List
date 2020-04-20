import { Route, Redirect } from 'react-router-dom';
import React from 'react';

function PrivateRoute({ component: Component, ...rest }) {
  console.log('home', rest);
  const UserCredentials = () => {
    const authed = JSON.parse(localStorage.getItem('UserCredentials'));
    if (authed) {
      return authed;
    }
    return undefined;
  };
  console.log('User', UserCredentials);
  return (
    <Route
      {...rest}
      render={props =>
        UserCredentials() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
  //   return UserCredentials ? <Route {...props} /> : <Redirect to="/" />;
}
export default PrivateRoute;
