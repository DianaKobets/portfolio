import './App.css';
import Navbar from './components/Navbar.tsx';
import ProjectPage from './pages/ProjectPage.tsx';
import Home from './pages/Home.tsx';
import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer.tsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProjectPage/:id" element={<ProjectPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
