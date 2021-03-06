import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Main from './components/Main'
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'
import logo from './logo.svg';
import './App.css';

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <Router><Switch>
        <Route exact path="/">
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Main/>
            </header>
            <p className="App-intro">{this.state.data}</p>
          </div> 
           </Route>
           <Route exact path="/pageone">
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <PageOne/>
            </header>
            <p className="App-intro">{this.state.data}</p>
          </div> 
           </Route>
           <Route exact path="/pagetwo">
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <PageTwo/>
            </header>
            <p className="App-intro">{this.state.data}</p>
          </div> 
           </Route>
        
    </Switch></Router>
    )}
}

export default App;