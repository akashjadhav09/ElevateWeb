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

import UiUxDevelopmentPage from "./features/services/UiUxDevelopmentPage";
import BrandDesignPage from "./features/services/BrandDesignPage";
import WebFlowPage from "./features/services/WebFlowPage";
import NoCodeDevelopment from "./features/services/NoCodeDevelopment";

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
          <Route path="/uiuxPage" element={<UiUxDevelopmentPage />} />
          <Route path="/branddesignpage" element={<BrandDesignPage />} />
          <Route path="/webflowpage" element={<WebFlowPage />} />
          <Route path="/nocodedevelopment" element={<NoCodeDevelopment />} />
        </Routes>
      </Router>
      <BookFreeCall />
      <Footer/>
    </>
  )
}

export default App;
