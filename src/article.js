
import React, { Component } from 'react';
import p1 from './images/article_placeholder_1.jpg';
import PropTypes from 'prop-types'
import PopUp from './popUp.js'

class Article extends Component{
  constructor(props){
    super(props)
    this.displayPopUp = this.displayPopUp.bind(this)
    this.closePopUp = this.closePopUp.bind(this)
  }

state = {
  showPopUp: false
}

  displayPopUp(){
    this.setState({
      showPopUp: true
    })
  }

  closePopUp(){
    this.setState({
      showPopUp: false
    })
  }

  render(){
    if(!this.state.showPopUp){
      return(
        <article className="article">
          <section className="featuredImage">
            <img src={this.props.image} alt="" />
          </section>
          <section className="articleContent">
            <a href="#" onClick={this.displayPopUp}><h3>{this.props.title}</h3></a>
            <h6>{this.props.category}</h6>
          </section>
          <section className="impressions">
            {this.props.ranking}
          </section>
          <div className="clearfix"></div>
        </article>
      )
    }else{
      return(
        <PopUp
          title={this.props.title}
          url={this.props.url}
          description={this.props.description}
          closePopUp={this.closePopUp}
        />
      )
    }
  }
}

Article.PropTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  ranking: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  displayPopUp: false

}

export default Article
