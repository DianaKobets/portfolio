import React from 'react';
import AboutMe from '../components/AboutMe.tsx';
import Navbar from '../components/Navbar.tsx';
import Projects from '../components/Projects.tsx';




function Home() {
  return (
    <>
      <div>
        <AboutMe/>
        <Projects/>
      </div>
  </>
  );
}

export default Home;
