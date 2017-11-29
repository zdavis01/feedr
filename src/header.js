import React, { Component } from 'react';
import searchImg from './images/search.png';
import './App.css';
import './CSS/htmlbp5.css';
import './CSS/normalize.css';
const bbc= {name: 'BBC News', source: 'bbc-news'}
const tdt = {name: 'The Daily Telegraph', source: 'the-telegraph'}
const nyt = {name: 'The New York Times', source: 'the-new-york-times'}

class Header extends Component{
  constructor(props){
    super(props)
    
  this.updateSource = this.updateSource.bind(this)
  this.refreshFeed = this.refreshFeed.bind(this)

  }

  state = {
    source:{},
    searchVisible: false
  }

  updateSource(e){
    var target = e.target.id
    var s = target == 'telegraph'? tdt: target == 'bbc'? bbc: nyt
    this.props.switchSource(s.source)

    this.setState({
      source: s
    })
  }

    refreshFeed(){
      this.props.reload()
    }

    handleOnClick = () => {
      this.setState({
        searchVisible:!this.state.searchVisible
      })
    }

  render(){
    return(
      <div>
        <header>
          <section className="container">
            <a href="#" onClick={this.refreshFeed}><h1>Feedr</h1></a>
              <nav>
                {this.state.searchVisible && <ul>
                  <li><a href="#">News Source: <span>{this.state.source.name}</span></a>
                    <ul>
                      <li><a id="newyorktimes" href="#" onClick={this.updateSource}>New York Times</a></li>
                      <li ><a id="telegraph" href="#" onClick={this.updateSource}>The Daily Telegraph</a></li>
                      <li ><a id="bbc" href="#" onClick={this.updateSource}>BBC News</a></li>
                    </ul>
                  </li>
                </ul>}
                <section id="search" onClick={this.handleOnClick}>
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
