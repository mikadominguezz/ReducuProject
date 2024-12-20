import React from 'react';
import { useNavigate } from 'react-router-dom';

function RightSidebar() {
  const navigate = useNavigate();
    
  const handleGoToMakePost = () => {
    setTimeout(() => {
        navigate("/makePost");
    },); 
  };
  return (
    <div>
        <div style={{
            gridColumn: '3 / 4',
            gridRow: '2 / 3',
            padding: '10px'
        }}>

          <button style={{
            padding: '0.5rem',
            background: "transparent",
            border: "none"
          }}
            onClick={() => handleGoToMakePost()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-plus" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#173363" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
              <path d="M9 12h6" />
              <path d="M12 9v6" />
            </svg>
            {/* editar redireccionamiento */}
          </button>
        </div>
    </div>
  );
}

export default RightSidebar;