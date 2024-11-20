import React from 'react';
import '../Components/Style.css';
import BackButton from '../Components/BackButton';
import PageLayout from '../Components/PageLayout';
import Post from '../Components/Post'; // Importa el nuevo componente

function Home() {
  return (
    <PageLayout>
      <div className="main">
        <div className="title">
          <BackButton />
          <h2>Home</h2>
        </div>
        <Post /> {/* Renderiza el componente Post */}
      </div>
    </PageLayout>
  );
}

export default Home;
