// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './Pages/Login';
import Home from './Pages/Home';
import LikesProfile from './Pages/LikesProfile';
import PostsProfile from './Pages/PostsProfile';
import CommentsProfile from './Pages/CommentsProfile';
import MakePost from './Pages/MakePost';
import CommentSecion from './Pages/CommentSection';
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
          <Route path="/likes" element={<LikesProfile />} />
          <Route path="/posts" element={<PostsProfile />} />
          <Route path="/comments" element={<CommentsProfile />} />
          <Route path="/makePost" element={<MakePost />} />
          <Route path="/commentSection" element={<CommentSecion />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
