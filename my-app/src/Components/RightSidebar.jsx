import React from 'react';

function RightSidebar() {
  return (
    <div>
        <div style={{
            gridColumn: '3 / 4',
            gridRow: '2 / 3',
            padding: '10px'
        }}>

          <button style={{
            display: 'flex',
            justifyItems: 'end',
            padding: '0.5rem',
            background: "transparent",
            border: "none"
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="48" height="48" viewBox="0 0 24 24" stroke-width="2.5" stroke="#173363" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
              <path d="M9 12h6" />
              <path d="M12 9v6" />
            </svg>
          </button>
        </div>
    </div>
  );
}

export default RightSidebar;