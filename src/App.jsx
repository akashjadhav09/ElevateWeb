import './App.css'
import HomePageNarrative from './features/home/HomePageNarrative';

import Footer from './shared/component/Footer';
import BookFreeCall from './shared/component/bookFreeCall';

function App() {
    let title = "Unforgettable, Websites, Brands & Visuals for Bold Visionaries.";
    let body = "We’re not your typical design agency. Founded in 2014, we’re a collective of designers, developers, and strategists who believe great digital experiences should be beautiful, functional, and human-centered. From startups to global brands, we help ambitious businesses stand out.We’re not your typical design agency. Founded in 2014, we’re a collective of designers, developers, and strategists who believe great digital experiences should be beautiful, functional, and human-centered. From startups to global brands, we help ambitious businesses stand out.";
    let imgsrc = "./public/assets/images/homepageNarr1.jpg"
  return (
    <>
      <Footer/>
      <BookFreeCall />
     <HomePageNarrative titleText={title} bodyText={body} imgSrc={imgsrc}/>
    </>
  )
}

export default App
