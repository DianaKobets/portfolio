import React from 'react';
import AboutMe from '../components/AboutMe.tsx';
import Navbar from '../components/Navbar.tsx';
import Projects from '../components/Projects.tsx';
import Skills from '../components/Skills.tsx';




function Home() {
  return (
    <>
      <div>
        <AboutMe/>
        <Projects/>
        <Skills/>
      </div>
  </>
  );
}

export default Home;
