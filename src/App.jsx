import './App.css'

import Navbar from './navbar/Navbar';
// import HomePage from './features/home/homePage';
// import AboutUsPage from './features/about/AboutPage';
import BookFreeCall from './shared/component/bookFreeCall';
import Footer from './shared/component/Footer';
import BlogPage from './features/blog/BlogPage';

function App() {
  return (
    <>
      <Navbar />
      {/* <HomePage /> */}
      {/* <AboutUsPage/> */}
      <BlogPage />
      <BookFreeCall />
      <Footer/>
    </>
  )
}

export default App;
