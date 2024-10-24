import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Menu() {
    const navigate = useNavigate();
    
    const handleGoBack = () => {
        setTimeout(() => {
            navigate("/");
        },); 
    };
  return (
    <div>
      <div style={{
            gridColumn: '3 / 4',
            gridRow: '2 / 3',
            padding: '10px',
            backgroundColor: '#667895',
            fontFamily: 'Open Sans, sans-serif'
        }}>
        {/* Botón Home */}
        <button className="btn text-white" style={{
          paddingLeft: "4.3rem",
          paddingRight: "4.3rem",
          border: "none",
          background: "transparent"
        }}
          onClick={() => handleGoBack()}
        >
          Home
        </button>

        {/* Dropdown Profile */}
        <div className="dropdown" style={{
          marginTop: '10px',
          paddingLeft: "3.4rem",
          paddingRight: "3.4rem",
          border: "none",
          background: "transparent"
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
