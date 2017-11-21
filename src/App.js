import React, { Component } from 'react';
import searchImg from './images/search.png';
import './App.css';
import './CSS/htmlbp5.css';
import './CSS/normalize.css';
import Header from './header';
import Article from './article';
import Loader from './loader'
const nyTimes = "https://newsapi.org/v2/top-headlines?sources=the-new-york-times&apiKey=ee3927e291d041e6ba8fd44f4c0516ed";


class App extends Component {
  constructor(props){
    super(props)
    this.getArticles = this.getArticles.bind(this)
    this.switchSource = this.switchSource.bind(this)

  }

  state = {
    showLoader: false,
    defaultArticles: [],
    hasArticles:true,
    newsSource: ''

  }

  switchSource(source){
    console.log(source);
    this.setState({
      newsSource: source
    })
  }

  getArticles() {
    fetch(nyTimes)
    .then(results => results.json())
    .then(data => {
      if(data.status !== `OK`) {

        this.setState({
          defaultArticles: data.articles,
          hasArticles:true,
        })
      }else{
        console.log("something is wrong with the article fetch");
      }
    })
  }


  componentDidMount() {
    if(!this.hasArticles){
      this.getArticles()
    }
  }

  render() {
    if(!this.state.hasArticles && this.state.showLoader){
      return(
        <div>
          <Header
            switchSource={this.switchSource}
          />
          <Loader showLoader={this.state.showLoader} />
          <section id="main" className="container">

          </section>
        </div>
      )
    }else{
      return (
        <div>
          <Header
            switchSource={this.switchSource}
          />
          <Loader showLoader={this.state.showLoader} />
          <section id="main" className="container">
            {this.state.defaultArticles.map(article => {
              return (
                  <Article
                    title={article.title}
                    category={article.author}
                    image={article.urlToImage}
                    ranking={'0'}
                  />
              )
            })}
          </section>
        </div>
      )
    }
  }
}

export default App;
