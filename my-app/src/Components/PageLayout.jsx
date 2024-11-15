import React from 'react';
import Header from './Header';
import Menu from './Menu';
import RightSidebar from './RightSidebar';
import '../Components/Style.css';

function PageLayout({children}) {
  return (
    <div className='webGeneral'>
      <Header/>
      <Menu/>
      {children}
      <div className='rightSidebar'>
        <RightSidebar/>
      </div>
    </div>
  );
}

export default PageLayout;