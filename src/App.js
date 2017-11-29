import React, { Component } from 'react';
import './App.css';
import './CSS/htmlbp5.css';
import './CSS/normalize.css';
import Header from './header';
import Article from './Article';
import Loader from './loader'
const nyTimes = "https://newsapi.org/v2/top-headlines?sources=the-new-york-times&apiKey=ee3927e291d041e6ba8fd44f4c0516ed";
const sources = ["https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=ee3927e291d041e6ba8fd44f4c0516ed", "https://newsapi.org/v2/top-headlines?sources=the-new-york-times&apiKey=ee3927e291d041e6ba8fd44f4c0516ed", "https://newsapi.org/v2/top-headlines?sources=the-telegraph&apiKey=ee3927e291d041e6ba8fd44f4c0516ed"]


class App extends Component {
  constructor(props){
    super(props)
    this.getArticles = this.getArticles.bind(this)
    this.switchSource = this.switchSource.bind(this)
    this.processArticles = this.processArticles.bind(this)
    this.reload = this.reload.bind(this)
    this.formatDate = this.formatDate.bind(this)

  }

  state = {
    showLoader: true,
    allArticles: [],
    displayArticles: [],
    hasArticles:true,
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
      this.formatDate(rawArticles)
      this.processArticles(rawArticles)
    }).catch(reason => {

        this.setState({
          fetchHasFailed: true
        })
      })
  }

   processArticles(raw){
    var tempArticles = []
    raw.map(articles =>
      articles.map( article =>
        tempArticles.push(article)
      )
    )
    this.setState({
      allArticles: tempArticles,
      displayArticles: tempArticles,
      showLoader: false
    })
  }

  formatDate(data){
    data.map( arr =>
      arr.forEach(function(datum, index) {
      console.log(new Date(datum.publishedAt))
      })
    )
  }

  reload() {
    this.setState({
      displayArticles: this.state.allArticles
    })
  }

  componentDidMount() {

    if(!this.hasArticles){
      this.getArticles(sources)
    }
  }

  render() {
    if(this.state.fetchHasFailed){
      console.log("Failed");
      return(
        <div>
          <Header
            switchSource={this.switchSource}
          />
          <section id="main" className="container">
          <div> We're so sorry, we can't retrieve your articles right now! </div>
        </section>
        </div>
      )
    }
    if(!this.state.hasArticles && this.state.showLoader){
      return(
        <div>
          <Header
            switchSource={this.switchSource}
          />
          <Loader showLoader={this.state.showLoader} />
          <section id="main" className="container"></section>
        </div>
      )
    }else{
      return (
        <div>
          <Header
            switchSource={this.switchSource}
            reload={this.reload}
          />
          <Loader showLoader={this.state.showLoader} />
          <section id="main" className="container">
            {this.state.displayArticles.map(article => {
              return (
                <Article
                  title={article.title}
                  category={article.author}
                  image={article.urlToImage}
                  ranking={article.publishedAt}
                  description={article.description}
                  url={article.url}
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
