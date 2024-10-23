import React from 'react';

function Header({logout}) {
    
  return (
    <div className='grid-container'>
        {/* Header */}
        <div className="d-flex justify-content-between">
            {/* Reducu + Logo */}
            <div className='d-flex' style={{paddingLeft: "10px"}}>
                <div className="d-grid align-content-end justify-content-center" style={{fontFamily: "Arial", fontSize: "3.5rem", color: "white"}}>
                    REDUCU
                </div>
                <img src="/Logo.png" alt="Logo" className="" style={{width: "4rem", objectFit: "contain", paddingBottom: "10px"}}/>
            </div>

            {/* Search bar */}
            <form class="d-flex" role="search" style={{width: "50rem", height: "3rem", marginTop: "1rem"}}>
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>

            {/* Botón Sing out */}
            <div className="border-bottom border-light" style={{marginTop: "1.5rem", marginRight:"20px"}}>
                <button className="btn btn-danger" onClick={() => logout({ returnTo: window.location.origin })}>
                    Sign out
                </button>
            </div>
        </div>
    </div>
  );
}

export default Header;