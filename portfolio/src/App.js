import './App.css';
import AboutMe from './components/AboutMe.tsx';
import Navbar from './components/Navbar.tsx';
import Projects from './components/Projects.tsx';

function App() {
  return (
    <div>
      <Navbar/>
      <AboutMe/>
      <Projects/>
    </div>
  );
}

export default App;
