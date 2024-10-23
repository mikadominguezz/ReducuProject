import React from 'react';
import { Link } from 'react-router-dom';

function Menu({ logout }) {
  return (
    <div>
      <div style={{
        gridRow: '2 / 3',
        padding: '10px'
      }}>
        {/* Botón Home */}
        <button className="btn text-white" style={{
          paddingLeft: "4.3rem",
          paddingRight: "4.3rem",
          border: "none",
          background: "transparent",
          fontFamily: 'Open Sans, sans-serif'
        }}
          onClick={() => window.open('https://www.instagram.com/ucuoficial/', '_blank')}
        >
          Home
        </button>

        {/* Dropdown Profile */}
        <div className="dropdown" style={{
          marginTop: '10px',
          paddingLeft: "3.4rem",
          paddingRight: "3.4rem",
          border: "none",
          background: "transparent",
          fontFamily: 'Open Sans, sans-serif'
        }}>
          <button className="btn dropdown-toggle text-white" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            Profile
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><Link className="dropdown-item" to="/posts">Posts</Link></li>
            <li><Link className="dropdown-item" to="/likes">Likes</Link></li>
            <li><Link className="dropdown-item" to="/comments">Comments</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
