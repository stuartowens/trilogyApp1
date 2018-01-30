import React from 'react';
import './app.scss';
import Hero from './Hero.jsx';
import HeroMobile from './HeroMobile.jsx';
import Header from './Header.jsx';
import Feature from './Feature.jsx';
import Story from './Story.jsx';
import Faq from './Faq.jsx';
import Footer from './Footer.jsx';


//The App component holds all of the components except for the Header and form component which live inside
//the hero components
class App extends React.Component {
  render() {
    return (
        <div className="App">
          <Hero />
          <HeroMobile />
          <Feature />
          <Story />
          <Faq />
          <Footer />
        </div>
      )
  }
}

export default App;
