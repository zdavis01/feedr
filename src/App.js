import React, { Component } from 'react';
import searchImg from './images/search.png';
import p1 from './images/article_placeholder_1.jpg';
import p2 from './images/article_placeholder_2.jpg';
import './App.css';
import './CSS/htmlbp5.css';
import './CSS/normalize.css';
import Header from './header';
import Article from './article';
import Loader from './loader'

class App extends Component {

  state = {
    showLoader: false
  }

  render() {
    return (
      <div>
        <Header />
        <Loader showLoader={this.state.showLoader} />
        <section id="main" className="container">
          <Article title="tit" category="cat" image={p1} ranking="2" />
          <Article title="tit" category="cat" image={p1} ranking="2"/>
          <Article title="tit" category="cat" image={p1} ranking="2"/>
          <Article title="tit" category="cat" image={p1} ranking="2"/>
        </section>
      </div>
    );
  }
}

export default App;
