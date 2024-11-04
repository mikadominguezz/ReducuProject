import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Menu from '../Components/Menu';
import RightSidebar from '../Components/RightSidebar';
import '../Components/Style.css';
import Comment from '../Components/Comment';
import {posts} from '../Data/hardCoded';

function Home() {
  //const [posts, setPosts] = useState(posts);

  useEffect(()=>{
    console.log('posts', posts)
  },[])
  return (
    <div className='webGeneral'>
      {/* IMPLEMENTAR STYLE */}
      
      {/* Header */}
      <Header></Header>

      {/* Menu options */}
      <Menu></Menu>
      
      {/* Main */}
      <div className='main'>
        Main Content
        {/* IMPLEMENTAR CHILDREN */}
        {/* van a aparecer todos los posts */}
      </div>

      {/* Right Sidebar */}
      <div className='rightSidebar'>
        <RightSidebar></RightSidebar>
      </div>
      
    </div>
  );
}

export default Home;

