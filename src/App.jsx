import './App.css'
import HomePageNarrative from './features/home/HomePageNarrative';

import Footer from './shared/component/Footer';
import BookFreeCall from './shared/component/bookFreeCall';
import HeroSection from './features/home/HeroSection';
import HomeFeatureIcon from './features/home/HomeFeatureIcon';
import HomeServiceCard from './features/home/HomeServiceCard';
import SpotlightCard from './features/home/SpotlightCard';
import ClientRating from './features/home/ClientRatingCard';
import HomeStudioSectionCard from './features/home/HomeStudioSectionCard';
import Navbar from './navbar/Navbar';

function App() {
    let title = "Unforgettable, Websites, Brands & Visuals for Bold Visionaries.";
    let body = "We’re not your typical design agency. Founded in 2014, we’re a collective of designers, developers, and strategists who believe great digital experiences should be beautiful, functional, and human-centered. From startups to global brands, we help ambitious businesses stand out.We’re not your typical design agency. Founded in 2014, we’re a collective of designers, developers, and strategists who believe great digital experiences should be beautiful, functional, and human-centered. From startups to global brands, we help ambitious businesses stand out.";
    let imgsrc = "./public/assets/images/homepageNarr1.jpg"
  return (
    <>
      <Navbar />
      <HeroSection />
      <HomePageNarrative titleText={title} bodyText={body} imgSrc={imgsrc}/>
      <HomeFeatureIcon />
      <HomeServiceCard />
      <SpotlightCard />
      <ClientRating />
      <HomeStudioSectionCard/>
      <BookFreeCall />
      <Footer/>
    </>
  )
}

export default App;
