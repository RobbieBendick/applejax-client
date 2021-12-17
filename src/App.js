import './App.css';
import React, {useEffect, useState} from "react";
import axios from 'axios';
import Home from "./components/Home/Home"
import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  // const [APIData, setAPIData] = useState(undefined)

  // function callAPI() {
  //   axios.get('http://localhost:9000/testAPI')
  //   .then(response => {
  //     // handle success
  //     setAPIData(response.data);
  //   })
  //   .catch(error => {
  //     // handle error
  //     console.log(error);
  //   })
  // }

  // useEffect(() => {
  //   callAPI();
  // }, [])


  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
