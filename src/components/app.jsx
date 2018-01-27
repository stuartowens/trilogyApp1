import React from 'react';
import './app.scss';
import Hero from './Hero.jsx';
import Header from './Header.jsx';
import Feature from './Feature.jsx';
import Story from './Story.jsx';
import Faq from './Faq.jsx';
import Footer from './Footer.jsx';



class App extends React.Component {
  render() {
    return (
        <div className="App">
          <Header />
          <Hero />
          <Feature />
          <Story />
          <Faq />
          <Footer />
        </div>
      )
  }
}

export default App;
