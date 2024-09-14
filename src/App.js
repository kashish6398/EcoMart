import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import BriefAbout from './components/BriefAbout';
import Blog from './components/Blog'; 
import ProductList from './components/ProductList';
import ContactUs from './components/ContactUs'; 
import Footer from './components/Footer2';
import './Style.css'; 

function App() {
  return (
    <Router>
    <div className="App">
      <NavigationBar />
      <div className="content">
        <Routes>
        <Route path="/" element={
              <>
                <BriefAbout />
                <ProductList/>
                <Blog />
                <ContactUs />
              </>
            } />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
