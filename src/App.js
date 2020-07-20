import React from 'react';
import { RecoilRoot } from 'recoil';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import TestYaml from './test.yaml';

import logo from './logo.svg';
import './App.css';
// import CharacterCounter from './CharacterCounter';
import FromNow from './FromNow';
import Login from './Login';

function App() {
  console.log('kk');
  return (
    <RecoilRoot>
      {/* <CharacterCounter /> */}
      <SwaggerUI
        url={TestYaml}
        defaultModelExpandDepth={2}
        docExpansion="list"
      />

      {/* <button onClick={this.handleClick}>What time is it?</button> */}
      <Login />
      {/* <FromNow date={new Date()} />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
    </RecoilRoot>
  );
}

export default App;
