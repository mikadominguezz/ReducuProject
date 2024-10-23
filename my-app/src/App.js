// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './Pages/Login';
import Home from './Pages/Home';
import './App.css';

function App() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  if (!isAuthenticated) {
    return <Login onLoginClick={loginWithRedirect} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home user={user} logout={logout} />} />
      </Routes>
    </Router>
  );
}

export default App;
