import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import axios from 'axios';




function App() {
  const [APIData, setAPIData] = useState(undefined)

  function callAPI() {
    axios.get('http://localhost:9000/testAPI')
    .then(response => {
      // handle success
      setAPIData(response.data);
    })
    .catch(error => {
      // handle error
      console.log(error);
    })
  }

  useEffect(() => {
    callAPI();
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => console.log(APIData)}> </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {APIData}
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

export default App;
