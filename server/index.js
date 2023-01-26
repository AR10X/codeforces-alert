import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/src/App';
import connectDB from './server/config/db';
const publicUrl = process.env.PUBLIC_URL;

connectDB();


ReactDOM.render(<App />, document.getElementById('root'));
