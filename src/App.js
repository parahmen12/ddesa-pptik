import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'; 
import Header from './components/header';
import Hero from './components/hero';
import VillageUmkm from './components/villageUmkm';
import VillageNews from './components/villageNews';
import VillageAparatus from './components/villageAparatus';
import VillageActivities from './components/villageActivities';
import VillageMedia from './components/villageMedia';
import VillageArea from './components/villageArea';
import Footer from './components/footer';
import ScrollToTop from './components/ScrollToTop'; 
import './output.css';

function App() {
  return (
    <Router>
      <div>
        {/* Header section */}
        <Header />

        {/* Main content sections */}
        <main>
          <section id="home" className="pt-16">
            <Hero />
          </section>
          <section id="villageMedia" classname="py-16">
            <VillageMedia />
          </section>
          <section id="villageAparatus" className="py-16">
            <VillageAparatus />
          </section>
          <section id="villageNews" className="py-16">
            <VillageNews />
          </section>
          <section id="villageUmkm" className="py-16">
            <VillageUmkm />
          </section>
          <section id="villageActivities" className="py-16">
            <VillageActivities />
          </section>
          <section id="villageArea" className="py-16">
            <VillageArea />
          </section>
        </main>

        {/* Footer */}
        <Footer />
        
        {/* Tombol Scroll To Top */}
        <ScrollToTop /> 
      </div>
    </Router>
  );
}

export default App;
