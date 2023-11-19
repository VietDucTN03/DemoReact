import React, { Component } from 'react'

export default class ProductCom extends Component {
  render() {
    let {data, desc} = this.props;
    return (
      <div className='card'>
        <h3>ProductCom</h3>
        <img src={data.image} alt="..." />
        <div className="card-body">
          <p>Name: {data.name}</p>
          <p>Age: {data.age}</p>
          <button className='btn btn-success'><i className='fa fa-heart'></i></button>
          {desc}
        </div>
      </div>
    )
  }
}
