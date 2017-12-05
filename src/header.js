import React, { Component } from 'react';
import searchImg from './images/search.png';
import './App.css';
import './CSS/htmlbp5.css';
import './CSS/normalize.css';
const bbc= {name: 'BBC News', source: 'bbc-news'}
const tdt = {name: 'The Daily Telegraph', source: 'the-telegraph'}
const nyt = {name: 'The New York Times', source: 'the-new-york-times'}

class Header extends Component{
  state = {
    source:{},
    searchVisible: false
  }

  updateSource = (source) => {
    this.props.switchSource(source)

    this.setState({
      source: source
    })
  }

    handleOnClick = () => {
      this.setState({
        searchVisible:!this.state.searchVisible
        // Nice toggle!
      })
    }

  render(){
    return(
      <header>
        <section className="container">
          <a href="#" onClick={this.props.reload}><h1>Feedr</h1></a>
            <nav>
              {this.state.searchVisible &&
              // Great use of inline conditional rendering!
              <ul>
                <li><a href="#">News Source: <span>{this.state.source.name}</span></a>
                  <ul>
                    <li><a id="newyorktimes" href="#" onClick={() => this.updateSource(nyt)}>New York Times</a></li>
                    <li ><a id="telegraph" href="#" onClick={() => this.updateSource(tdt)}>The Daily Telegraph</a></li>
                    <li ><a id="bbc" href="#" onClick={() => this.updateSource(bbc)}>BBC News</a></li>
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
    )
  }

}

export default Header
