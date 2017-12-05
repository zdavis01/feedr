import React, { Component } from 'react';

class PopUp extends Component {
  render() {
    return (
      <div className="popUp">
        <a className="closePopUp" onClick={this.props.closePopUp}>X</a>
          <div className="container">
            <img class="preview" src={this.props.image} alt="" />
            <h1>{this.props.title}</h1>
              <p>
                {this.props.description}
              </p>
                <a href={this.props.url} className="popUpAction" target="_blank">Read more from source</a>
          </div>
      </div>
    )
  }
}

export default PopUp
