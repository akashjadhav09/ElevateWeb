import './App.css'

import Navbar from './navbar/Navbar';
// import HomePage from './features/home/homePage';
// import AboutUsPage from './features/about/AboutPage';
// import BlogPage from './features/blog/BlogPage';
// import PortfolioPage from './features/portfolio/PortfolioPage';
// import CarrersPage from './features/carrers/CarrersPage';
// import GetQuotePage from './features/getquote/GetQuotePage';
import ContactPage from './features/contact/ContactPage';

import BookFreeCall from './shared/component/bookFreeCall';
import Footer from './shared/component/Footer';

function App() {
  return (
    <>
      <Navbar />
      {/* <HomePage /> */}
      {/* <AboutUsPage/> */}
      {/* <BlogPage /> */}
      {/* <PortfolioPage /> */}
      {/* <CarrersPage /> */}
      {/* <GetQuotePage /> */}
      <ContactPage />
      <BookFreeCall />
      <Footer/>
    </>
  )
}

export default App;
