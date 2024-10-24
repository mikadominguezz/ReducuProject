import React from 'react';
import Heart from "react-heart";
import { useState } from "react";

function Comments() {
    const [active, setActive] = useState(false);

  return (
    <div>
        {/* Box */}
        <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: "10px"
            }}>
            <div style={{
                border: '2px solid black',
                borderRadius:'10px',
                gridColumn: '2 / 3',
                width: '35rem',
                height: '10rem'
            }}>
                <div style={{
                    padding: "0.5rem"
                }}>
                    <h3>Qué sueño</h3>
                </div>
                
            </div>
        </div>

        {/* Likes & Comment(s) */}
        <div style={{
                display: "flex",
                paddingLeft: "17rem",
                gap: "0.5rem"
            }}>
            <div style={{width: "2rem", paddingTop:"0.35rem"}}>
                <Heart isActive={active} onClick={() => setActive(!active)}/>
            </div>
            <button style={{
                border: "none",
                background: "transparent"
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-circle" width="40" height="40" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
                </svg>
            </button>
        </div>
    </div>
  );
}

export default Comments;