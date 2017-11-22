import React, { Component } from 'react';
import searchImg from './images/search.png';
import p1 from './images/article_placeholder_1.jpg';
import p2 from './images/article_placeholder_2.jpg';
import './App.css';
import './CSS/htmlbp5.css';
import './CSS/normalize.css';
const bbc= {name: 'BBC News', url: 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=ee3927e291d041e6ba8fd44f4c0516ed'} //Top Headlines from BBC News
const tdt = {name: 'The Daily Telegraph', url: 'https://newsapi.org/v2/top-headlines?sources=the-telegraph&apiKey=ee3927e291d041e6ba8fd44f4c0516ed'}
const nyt = {name: 'The New York Times', url: 'https://newsapi.org/v2/top-headlines?sources=the-new-york-times&apiKey=ee3927e291d041e6ba8fd44f4c0516ed'}

class Header extends Component{
  constructor(props){
    super(props)
  this.updateSource = this.updateSource.bind(this)
  this.refreshFeed = this.refreshFeed.bind(this)
  }

  state = {
    source:nyt
  }

  updateSource(e){
    var target = e.target.id
    var s = target == 't'? tdt: target == 'b'? bbc: nyt
    this.props.switchSource(s.url)

    // this.setState({
    //   source: s.name
    // })
  }

    refreshFeed(){
      this.props.switchSource(nyt.url)
    }

  render(){
    return(
      <div>
        <header>
          <section className="container">
            <a href="#" onClick={this.refreshFeed}><h1>Feedr</h1></a>
              <nav>
                <ul>
                  <li><a href="#">News Source: <span>{this.state.source.name}</span></a>
                    <ul>
                      <li><a id="n" href="#" onClick={this.updateSource}>New York Times</a></li>
                      <li ><a id="t" href="#" onClick={this.updateSource}>The Daily Telegraph</a></li>
                      <li ><a id="b" href="#" onClick={this.updateSource}>BBC News</a></li>
                    </ul>
                  </li>
                </ul>
                <section id="search">
                  <input type="text" name="name" value="" />
                    <a href="#"><img src={searchImg} alt="" /></a>
                </section>
              </nav>
              <div className="clearfix"></div>
          </section>
        </header>
      </div>
    )
  }

}

export default Header
