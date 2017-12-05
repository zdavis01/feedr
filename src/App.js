import React, { Component } from 'react';
import moment from 'moment';
import './App.css';
import './CSS/htmlbp5.css';
import './CSS/normalize.css';
import Header from './header';
import Article from './Article';
import Loader from './loader'
const sources = ["https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=ee3927e291d041e6ba8fd44f4c0516ed", "https://newsapi.org/v2/top-headlines?sources=the-new-york-times&apiKey=ee3927e291d041e6ba8fd44f4c0516ed", "https://newsapi.org/v2/top-headlines?sources=the-telegraph&apiKey=ee3927e291d041e6ba8fd44f4c0516ed"]


class App extends Component {
  constructor(props){
    super(props)
    this.getArticles = this.getArticles.bind(this)
    this.switchSource = this.switchSource.bind(this)
    this.processArticles = this.processArticles.bind(this)
    this.reload = this.reload.bind(this)
  }

  state = {
    showLoader: true,
    allArticles: [],
    displayArticles: [],
    newsSource: sources,
    fetchHasFailed: false

  }

  switchSource(source){

    this.setState({
      displayArticles: this.state.allArticles.filter(art => art.source.id == source)
    })
  }

  getArticles(urlList) {
    var rawArticles = []
    Promise.all(urlList.map(url =>
      fetch(url).then(response => response.json())
    )).then(collection => {
      collection.map(item =>
        rawArticles.push(item.articles)
      )
      // Stunning use of map, fetch + Promise.all!
      this.processArticles(rawArticles)
    }).catch(reason => {

        this.setState({
          fetchHasFailed: true
        })
      })
  }

   processArticles(raw){
    var tempArticles = [].concat.apply([], raw);
    this.setState({
      allArticles: tempArticles,
      displayArticles: tempArticles,
      showLoader: false
    })
  }

  reload() {
    this.setState({
      displayArticles: this.state.allArticles
    })
  }

  componentDidMount() {
    this.getArticles(sources)
  }

  render() {
    let message;

    if(this.state.fetchHasFailed){
      console.log("Failed");
      message = <div> We're so sorry, we can't retrieve your articles right now! </div>
    }

    return(
      <div>
        <Header
          switchSource={this.switchSource}
          reload={this.reload}
        />
        <Loader showLoader={this.state.showLoader} />
        <section id="main" className="container">
          {message}
          {this.state.displayArticles.map(article => {
            return (
              <Article
                title={article.title}
                category={article.author}
                image={article.urlToImage}
                ranking={moment(article.publishedAt).fromNow() /* or moment(article.publishedAt).format('MMM Do YY, h:mm:ss a') */}
                description={article.description}
                url={article.url}
              />
            )
          })}
        </section>
      </div>
    );
  }
}

export default App;
