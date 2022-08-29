import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import actionCable from 'actioncable'
// be sure to install the `actioncable` library!

// const cable = actionCable.createConsumer('ws://localhost:3000/cable')
// send down `cable` as a prop to components that will use it

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
