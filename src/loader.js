import React, { Component } from 'react';

const Loader = (props) => {
  if(props.showLoader){
    return <div className="loader"></div>
  }
  return null
}

export default Loader
