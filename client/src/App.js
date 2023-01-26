import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'halfmoon/css/halfmoon.min.css';
import Login from './components/Login';
import Register from './components/Register';
import Form from './components/Form';
import ToggleSwitch from './components/ToggleSwitch';
import Alert from './components/Alert';

function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/" exact>
        <Form />
        <ToggleSwitch />
        <Alert />
      </Route>
    </Router>
  );
}

export default App;
