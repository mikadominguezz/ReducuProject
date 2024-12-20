import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Header() {
    const {logout} = useAuth0();

  return (
    <div className='grid-container' style={{
        gridColumn: '1 / 4',
        height: '150px',
        backgroundColor: '#667895'
    }}>
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
            <form className="d-flex" role="search" style={{width: "50rem", height: "2.5rem", marginTop: "1rem"}}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{
                    borderRadius: '50px',
                    padding: '0.5rem 1rem',
                    }}>
                </input>
                <button className="btn" type="submit" style={{
                    borderRadius: '50px',
                    border: "none",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.5rem',
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                        </svg>
                </button>
            </form>


            {/* Botón Sing out */}
            <div style={{
                marginTop: "1rem",
                marginRight:"20px"
                }}>
                <button className="visibleButton" onClick={() => logout({ returnTo: window.location.origin })}>
                    Sign out
                </button>
            </div>
        </div>
    </div>
  );
}

export default Header;