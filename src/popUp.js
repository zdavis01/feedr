import React, { Component } from 'react';

class PopUp extends Component {
  constructor(props){
    super(props)
    this.close = this.close.bind(this)
  }
  state = {
    display: "block",
    title: "Henry's day at the park",
    description: "A write up on Henry the Thirds trip to Central Park"
  }

  close() {

    this.setState({
      display: "none"
    })
    this.props.closePopUp()
  }

  render() {
    return (
      <div className="popUp" style={{display: this.state.display}}>
        <a className="closePopUp" onClick={this.close}>X</a>
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
