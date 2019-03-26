import React, { Component } from 'react';

class GoogleAuth extends Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '722389422854-qu61gfsc0aigj18p64deaibl6159qood.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>Loading...</div>;
    } else if (this.state.isSignedIn) {
      return <div>Signed in</div>;
    } else {
      return <div>Logged out</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
