// src/Componentes/Home.js
import React from 'react';
import './Home.css'; // Aquí puedes agregar tu propio estilo

function Home({ logout }) {
  return (
    <div className="">
      <div className=" p-3 border-bottom border-light">
        <button className="btn btn-danger" onClick={() => logout({ returnTo: window.location.origin })}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
