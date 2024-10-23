import React from 'react';

function Menu({ logout }) {
  return (
    <div>
        <div style={{
            gridRow: '2 / 3',
            padding: '10px'
        }}>
            <button className="btn text-white" style={{
                paddingLeft: "4.3rem",
                paddingRight: "4.3rem",
                border: "none",
                background: "transparent",
                fontFamily: 'Open Sans, sans-serif'
            }}
                onClick={() => window.open('https://www.instagram.com/ucuoficial/', '_blank')}
                // editar url
            >
                Home
            </button>
        
            <div class="dropdown" style={{
                marginTop: '10px',
                paddingLeft: "3.4rem",
                paddingRight: "3.4rem",
                border: "none",
                background: "transparent",
                fontFamily: 'Open Sans, sans-serif'
            }}>
                <a class="btn dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Profile
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Posts</a></li>
                    <li><a class="dropdown-item" href="#">Likes</a></li>
                    <li><a class="dropdown-item" href="#">Comments</a></li>
                </ul>
            </div>
      </div>
    </div>
  );
}

export default Menu;