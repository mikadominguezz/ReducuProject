// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Menu from './Components/Menu';
import Likes from './Pages/Likes';
import Posts from './Pages/PostsProfile';
import Comments from './Pages/CommentsProfile';
import MakePost from './Pages/MakePost';
import 'bootstrap/dist/css/bootstrap.min.css';  // Importa los estilos de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Importa el JS de Bootstrap y Popper.js
import './App.css';

function App() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  if (!isAuthenticated) {
    return <Login onLoginClick={loginWithRedirect} />;
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/makePosts" element={<MakePost />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
