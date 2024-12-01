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

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 100px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/business-portraits" element={<BusinessPortraits />} />
          <Route path="/new-born" element={<NewBorn />} />
          <Route path="/family-portraits" element={<FamilyPortraits />} />
          <Route path="/pregnancy" element={<Pregnancy />} />
          <Route path="/fashion-portraits" element={<FashionPortraits />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
