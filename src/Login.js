import React from 'react';
import GoogleLogin from 'react-google-login';

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <GoogleLogin
      clientId="110267807401-lbg6187ps7h67p10v3un0cfkt8iar4k6.apps.googleusercontent.com" // Etadi prj
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      isSignedIn
      cookiePolicy={'single_host_origin'}
      theme="dark"
    />
  );
};

export default Login;
