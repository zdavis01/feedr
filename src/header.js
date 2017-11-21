import React, { Component } from 'react';
import searchImg from './images/search.png';
import p1 from './images/article_placeholder_1.jpg';
import p2 from './images/article_placeholder_2.jpg';
import './App.css';
import './CSS/htmlbp5.css';
import './CSS/normalize.css';
const bbc = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=ee3927e291d041e6ba8fd44f4c0516ed"; //Top Headlines from BBC News
const telegraph = "https://newsapi.org/v2/top-headlines?sources=the-telegraph&apiKey=ee3927e291d041e6ba8fd44f4c0516ed"
const nyTimes = "https://newsapi.org/v2/top-headlines?sources=the-new-york-times&apiKey=ee3927e291d041e6ba8fd44f4c0516ed";

class Header extends Component{
  constructor(props){
    super(props)
    this.nyTimes=this.nyTimes.bind(this)
    this.theDailyTelegraph=this.theDailyTelegraph.bind(this)
    this.bbcNews=this.bbcNews.bind(this)
  }


  nyTimes(){
    this.props.switchSource(nyTimes)
  }

  theDailyTelegraph(){
    this.props.switchSource(telegraph)
  }

  bbcNews(){
    this.props.switchSource(bbc)
  }

  render(){
    return(
      <div>
    <header>
      <section className="container">
        <a href="#"><h1>Feedr</h1></a>
        <nav>
          <ul>
            <li><a href="#">News Source: <span>Source Name</span></a>
              <ul>
                  <li onClick={this.nyTimes}><a href="#">New York Times</a></li>
                  <li onClick={this.theDailyTelegraph}><a href="#">The Daily Telegraph</a></li>
                  <li onClick={this.bbcNews}><a href="#">BBC News</a></li>
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
