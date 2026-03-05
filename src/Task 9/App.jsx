import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import FAQ from './Components/FAQ';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import Pricing from './Components/Pricing';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
export default function AppTaskNine() {
  return (
<>
 
  
  
  <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="about" element={<About />}/>
    <Route path="contact" element={<Contact />}/>
    <Route path="pricing" element={<Pricing />}/>
    <Route path="faq" element={<FAQ />}/>
    <Route path="blog" element={<Blog />}/>
    <Route path="portfolio" element={<Portfolio />}/>
   </Routes>
  </BrowserRouter>

</>
  );
}