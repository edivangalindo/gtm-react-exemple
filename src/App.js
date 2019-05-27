import React, { useState } from 'react';
import './App.css';

// Lib de integração
// https://www.npmjs.com/package/react-gtm-module
import TagManager from 'react-gtm-module';

function App() {
  // Hooks para gravar os estados de id e auth
  const [gmtId, setGmtId] = useState('');
  const [auth, setAuth] = useState('');

  // Objeto de inicialização, suporta dataLayer, events, preview
  const tagManagerArgs = {
    gtmId: gmtId,
    auth: auth
  };

  // Inicialização
  TagManager.initialize(tagManagerArgs);

  return (
    <div className="App">
      <p>GMT ID</p>
      <input name="gmtID" onChange={event => setGmtId(event.target.value)} />

      <p>Auth</p>
      <input name="auth" onChange={event => setAuth(event.target.value)} />
    </div>
  );
}

export default App;
