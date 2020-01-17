import React from 'react';
import logo from './logo.svg';
import './App.css';

const makeRequest = async(url = '') => {
  try {
    let response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        "USER_LOGIN":"lucyhackwrench@gmail.com",
        "USER_HASH":"7eec599bfa5d0bc03195afadf8b20e92b1424c51"
      }
    });
    return await response.json();
  }
  catch(e) {
    console.log(e);
  }
};

class App extends  React.Component {
  componentDidMount () {
    //makeRequest('https://lucyhackwrench.amocrm.ru/private/api/auth.php');
    console.log('test');
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
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
      </div>
    );
  }
}

export default App;
