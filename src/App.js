import './App.css';
import React, {useEffect, useState} from "react";
import axios from 'axios';
import Home from "./components/Home/Home"
import Banner from "./components/Banner/Banner"
import Navigation from './components/Navigation/Navigation';
import 'antd/dist/antd.css';



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
      <Navigation />
      <Banner />
      <Home />
    </div>
  );
}

export default App;
