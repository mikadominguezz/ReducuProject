import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth0 } from '@auth0/auth0-react';

const Inicio = () => {
  const { loginWithRedirect } = useAuth0();

  return ( 
    <div className="vh-100 d-grid justify-content-center">
      <div className="d-flex justify-content-center align-items-end">
        <div className="d-grid align-content-end justify-content-center" style={{fontFamily: "Arial", fontSize: "5rem", color: "#423F32"}}>
          REDUCU
        </div>
        <img src="/Logo.png" alt="Logo" className="" style={{width: "7rem", objectFit: "contain", paddingBottom: "2rem"}}/>
      </div>
      
      {/* Login */}
      <div className="row d-flex flex-column">
        <div className="col d-flex flex-column align-items-center justify-content-start" style={{marginBottom: "0px", marginBottom:"0px"}}>
          <button 
            className="btn btn-lg text-white rounded-0 mb-3"
            onClick={() => loginWithRedirect()}
            style={{paddingLeft:"7rem", paddingRight:"7rem", backgroundColor: "#173363"}}
            >Login
          </button>
          
          <button 
            className="btn btn-lg bg-black text-white rounded-0" 
            style={{paddingLeft:"4.3rem", paddingRight:"4.3rem"}}
            onClick={() => window.open('https://www.instagram.com/ucuoficial/', '_blank')}
            >UCU Instagram
          </button>
        </div>
      </div>

    </div>
  );
}

export default Inicio;
