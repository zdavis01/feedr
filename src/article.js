
import React, { Component } from 'react';
import p1 from './images/article_placeholder_1.jpg';
import PropTypes from 'prop-types'

class Article extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <article className="article">
        <section className="featuredImage">
          <img src={this.props.image} alt="" />
        </section>
        <section className="articleContent">
            <a href="#"><h3>{this.props.title}</h3></a>
            <h6>{this.props.category}</h6>
        </section>
        <section className="impressions">
          {this.props.ranking}
        </section>
        <div className="clearfix"></div>
      </article>
    )
  }
}

Article.PropTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  ranking: PropTypes.number.isRequired,

}

export default Article
