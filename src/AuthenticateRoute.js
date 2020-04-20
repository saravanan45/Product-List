import { Route, Redirect } from 'react-router-dom';
import React from 'react';

function AuthenticateRoute({ component: Component, ...rest }) {
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
          <Redirect
            to={{ pathname: '/home', state: { from: props.location } }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
  //   console.log('Authentiacat', Component);
  //   const UserCredentials = JSON.parse(localStorage.getItem('UserCredentials'));
  //   return (
  //     <Route
  //       {...rest}
  //       render={props =>
  //         UserCredentials ? <Redirect to="/home" /> : <Component {...props} />
  //       }
  //     />
  //   );
  //   return UserCredentials ? <Redirect to="/home" /> : <Route {...props} />;
}
export default AuthenticateRoute;
