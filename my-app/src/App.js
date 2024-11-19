import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './Pages/Login';
import Home from './Pages/Home';
import LikesProfile from './Pages/LikesProfile';
import PostsProfile from './Pages/PostsProfile';
import CommentsProfile from './Pages/CommentsProfile';
import MakePost from './Pages/MakePost';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

function App() {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

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
        </Routes>
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Logout
        </button>
      </div>
    </Router>
  );
}

export default App;
