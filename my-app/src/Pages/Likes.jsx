import React from 'react';

function Likes({ logout }) {
  return (
    <div>
        <h2>Likes Component</h2>
        <div className="border-bottom border-light" style={{
            marginTop: "1.5rem",
            marginRight:"20px"
            }}>
            <button className="btn text-white" onClick={() => logout({ returnTo: window.location.origin })} style={{
                fontFamily: 'Open Sans, sans-serif',
                backgroundColor: "#173363",
                paddingLeft: "10px"
            }}>
                Sign out
            </button>
        </div>

    </div>
  );
}

export default Likes;