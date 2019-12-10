import React, { useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Login from './components/login/Login'
import Authwall from './components/authwall/authwall'

function App() {
  const [authToken, setAuthToken] = useState("")
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route 
            exact path="/" 
            render={(props) => (
              <Login {...props} authToken={authToken} setAuthToken={setAuthToken} />
            )} 
          />
          <Route 
            path='/welcome' 
            render={(props) => (
              <Authwall {...props} authToken={authToken} setAuthToken={setAuthToken} />
            )} 
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
