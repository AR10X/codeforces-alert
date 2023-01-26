import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import connectDB from './db'
connectDB();


ReactDOM.render(<App />, document.getElementById('root'));
