import React from 'react';
import doitImage from './resources/images/doit.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Collection visualizer</h1>
      <h2>Let's learn React and build an app that can visualize a collection from a database</h2>
      <img src={doitImage} alt="doit" />
    </div>
  );
}

export default App;
