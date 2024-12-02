import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Wedding from './pages/Wedding/Wedding';
import BusinessPortraits from './pages/BusinessPortraits/BusinessPortraits';
import NewBorn from './pages/NewBorn/NewBorn';
import FamilyPortraits from './pages/FamilyPortraits/FamilyPortraits';
import Pregnancy from './pages/Pregnancy/Pregnancy';
import FashionPortraits from './pages/FashionPortraits/FashionPortraits';
import About from './pages/About/About'; 
import Pricing from './pages/Pricing/Pricing';
import Portfolio from './pages/Portfolio/Portfolio'; 
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 100px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/portfolio" element={<Portfolio />} /> 
          <Route path="/portfolio/weddings" element={<Wedding />} />
          <Route path="/portfolio/business-portraits" element={<BusinessPortraits />} />
          <Route path="/portfolio/new-born" element={<NewBorn />} />
          <Route path="/portfolio/pregnancy" element={<Pregnancy />} />
          <Route path="/portfolio/family-portraits" element={<FamilyPortraits />} />
          <Route path="/portfolio/fashion-portraits" element={<FashionPortraits />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
