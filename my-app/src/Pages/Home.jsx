import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Menu from '../Components/Menu';
import RightSidebar from '../Components/RightSidebar';
import '../Components/Style.css';
import Comment from '../Components/Comment';
import {posts} from '../Data/hardCoded';
import BackButton from '../Components/BackButton';

function Home() {
  //const [posts, setPosts] = useState(posts);

  useEffect(()=>{
    console.log('posts', posts)
  },[])
  return (
    <div className='webGeneral'>
      {/* IMPLEMENTAR STYLE */}
      
      {/* Header */}
      <Header/>

      {/* Menu options */}
      <Menu/>
      
      {/* Main */}
      <div className='main'>
        <div className='title'>
          <BackButton/>
          <h2>Home</h2>
        </div>
        {/* IMPLEMENTAR CHILDREN */}
        {/* van a aparecer todos los posts */}
      </div>

      {/* Right Sidebar */}
      <div className='rightSidebar'>
        <RightSidebar/>
      </div>
      
    </div>
  );
}

export default Home;

