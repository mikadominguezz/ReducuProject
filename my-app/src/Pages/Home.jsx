import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Menu from '../Components/Menu';
import RightSidebar from '../Components/RightSidebar';
import '../Components/Style.css';
import Comment from '../Components/Comment';
import {posts} from '../Data/hardCoded';
import BackButton from '../Components/BackButton';
import PageLayout from '../Components/PageLayout';

function Home() {
  //const [posts, setPosts] = useState(posts);

  useEffect(()=>{
    console.log('posts', posts)
  },[])
  return (
    <PageLayout>
      <div className='main'>
        <div className='title'>
          <BackButton/>
          <h2>Home</h2>
        </div>
      </div>
    </PageLayout>
  );
}

export default Home;

