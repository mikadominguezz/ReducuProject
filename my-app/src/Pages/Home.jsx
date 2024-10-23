import React from 'react';
import Header from '../Components/Header';
import Menu from '../Components/Menu';
import RightSidebar from '../Components/RightSidebar';

function Home({ logout }) {
  return (
    <div className='grid-container' style={{
      display: 'grid',
      gridTemplateColumns: '200px 1fr 150px',
      gridTemplateRows: 'auto 1fr auto',
      gap: '10px',
      backgroundColor: '#667895',
      height: '100vh',
      padding: '0px',
      boxSizing: 'border-box'
    }}>
      {/* Header */}
      <div style={{
        gridColumn: '1 / 4',
        height: '150px',
        backgroundColor: '#667895'
      }}>
        <Header></Header>
      </div>

      {/* Menu options */}
      <Menu></Menu>
      
      {/* Main */}
      <div style={{
        gridColumn: '2 / 3',
        gridRow: '2 / 3',
        backgroundColor: 'white',
        padding: '10px'
      }}>
        Main Content
      </div>

      {/* Right Sidebar */}
      <RightSidebar></RightSidebar>

      {/* Footer */}
      {/* <div style={{
        gridColumn: '1 / 4',
        backgroundColor: '#dcdcdc',
        textAlign: 'center',
        padding: '10px'
      }}>
        Footer
      </div> */}
    </div>
  );
}

export default Home;

