import React from 'react';
import Navigation from './components/Navigation'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router';

// write impor for browswerrouter and router here //

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Router />
    </BrowserRouter>
  );
}

export default App;



