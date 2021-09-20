import React from 'react';
import { withAuth0 } from 'auth0';

class LogoutButton extends React.Component {
  render() {
    const { logout } = this.props.auth0;

    return (
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
    );
  }
}

export default withAuth0(LogoutButton);
