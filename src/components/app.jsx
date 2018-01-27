import React from 'react';
import './app.scss';
import Hero from './Hero.jsx';
import Header from './Header.jsx';
import Feature from './Feature.jsx';
import Story from './Story.jsx';
import Faq from './Faq.jsx';
import Footer from './Footer.jsx';
import heroContent from '../Content/HeroContent.js';



class App extends React.Component {
  constructor(){
    super()
    this.state= {
      heroId: 'Hero_code'
    }
  }
  componentDidMount(){
    heroContent();
  };
  render() {
    return (
        <div className="App">
          {/* <Header /> */}
          <Hero heroId={this.state.heroId}/>
          <Feature />
          <Story />
          <Faq />
          <Footer />
        </div>
      )
  }
}

export default App;
