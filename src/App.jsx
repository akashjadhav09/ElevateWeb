import './App.css'

import Navbar from './navbar/Navbar';
import HomePage from './features/home/homePage';
import BookFreeCall from './shared/component/bookFreeCall';
import Footer from './shared/component/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <BookFreeCall />
      <Footer/>
    </>
  )
}

export default App;
