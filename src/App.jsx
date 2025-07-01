import './App.css'

import Navbar from './navbar/Navbar';
// import HomePage from './features/home/homePage';
// import AboutUsPage from './features/about/AboutPage';
// import BlogPage from './features/blog/BlogPage';
// import PortfolioPage from './features/portfolio/PortfolioPage';
import CarrersPage from './features/carrers/CarrersPage';


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
      <CarrersPage />
      <BookFreeCall />
      <Footer/>
    </>
  )
}

export default App;
