import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import HomePage from './features/home/homePage';
import AboutUsPage from './features/about/AboutPage';
import BlogPage from './features/blog/BlogPage';
import PortfolioPage from './features/portfolio/PortfolioPage';
import CarrersPage from './features/carrers/CarrersPage';
import GetQuotePage from './features/getquote/GetQuotePage';
import ContactPage from './features/contact/ContactPage';

import BookFreeCall from './shared/component/bookFreeCall';
import Footer from './shared/component/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/careers" element={<CarrersPage />} />
          <Route path="/quote" element={<GetQuotePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
      <BookFreeCall />
      <Footer/>
    </>
  )
}

export default App;
