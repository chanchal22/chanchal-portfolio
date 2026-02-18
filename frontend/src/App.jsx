import React ,{useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';      // <-- Yahan Home ko import kiya hai
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import GalleryPages from './components/GalleryPages';
import Blog from './components/Blog';
import Admin from './components/Admin';
import BlogDetail from './components/BlogDetail'; // Import karein
import AdminLogin from './components/AdminLogin';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("adminToken"));
 return (
  <div className="font-sans text-gray-800 bg-gray-50 min-h-screen pt-24">
    <Navbar />
    <Routes>
      <Route path="/" element={
        <>
          <section id="home"><Home /></section>
          <section id="about"><About /></section>
          <section id="projects"><Projects /></section>
          <section id="contact"><Contact /></section>
        </>
      } />
      
      <Route path="/gallery" element={<GalleryPages />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetail />} />

      {/* 🔐 सुरक्षित एडमिन रास्ता (Line 30 को इससे बदलें) */}
      <Route 
        path="/admin" 
        element={
          isAuthenticated ? (
            <Admin />
          ) : (
            <AdminLogin setAuth={setIsAuthenticated} />
          )
        } 
      />
    </Routes>
  </div>
);
}

export default App;